import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { HorseFormValues, PersonalInfo } from "@/types/form-types";


export default async function generatePdf(
  personal: PersonalInfo,
  horses: HorseFormValues[],
  images: File[] = []
) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 12;
  let y = height - 40;

  const drawText = (text: string) => {
    page.drawText(text, { x: 50, y, size: fontSize, font, color: rgb(0, 0, 0) });
    y -= 20;
  };

  drawText("Informations personnelles");
  drawText(`Nom : ${personal.nom} ${personal.prenom}`);
  drawText(`Taille : ${personal.taille} cm`);
  drawText(`Taille pantalon : ${personal.taillePantalon}`);
  drawText(`Téléphone : ${personal.telephone}`);
  drawText(`Email : ${personal.email}`);
  drawText(`Adresse : ${personal.adresse}, ${personal.codePostal} ${personal.ville}`);

  if (personal.adresseDiff) {
    drawText(`Adresse de rendez-vous différente : ${personal.lieuNom}, ${personal.lieuAdresse}, ${personal.lieuCodePostal} ${personal.lieuVille}`);
    drawText(`Précisions accès : ${personal.lieuPrecisions}`);
  }

  for (let i = 0; i < horses.length; i++) {
    const horse = horses[i];
    const imageFile = images[i];

    drawText(`\nÉquidé ${i + 1}`);
    drawText(`Nom : ${horse.name}, Âge : ${horse.age} ans, Taille : ${horse.height} cm`);
    drawText(`Race : ${horse.breed}`);
    drawText(`Selle actuelle : ${horse.saddleBrand} - ${horse.saddleModel}`);
    drawText(`Disciplines : ${horse.disciplines}`);
    drawText(`Motif de la demande : ${horse.reason}`);
    drawText(`Problèmes cheval : ${horse.horseIssues}`);
    drawText(`Problèmes cavalier : ${horse.riderIssues}`);

    if (imageFile) {
      try {
        const imageBytes = await imageFile.arrayBuffer();
        let embeddedImage;

        if (imageFile.type === "image/jpeg" || imageFile.type === "image/jpg") {
          embeddedImage = await pdfDoc.embedJpg(imageBytes);
        } else if (imageFile.type === "image/png") {
          embeddedImage = await pdfDoc.embedPng(imageBytes);
        }

        if (embeddedImage) {
          const imgDims = embeddedImage.scale(0.25);
          y -= imgDims.height + 10;

          if (y < 100) {
            const newPage = pdfDoc.addPage();
            y = newPage.getSize().height - 40;
          }

          page.drawImage(embeddedImage, {
            x: 50,
            y: y,
            width: imgDims.width,
            height: imgDims.height,
          });

          y -= 20;
        }
      } catch (e) {
        console.error(`Erreur lors de l'insertion de l'image pour le cheval ${i + 1}`, e);
      }
    }

    y -= 30;
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
