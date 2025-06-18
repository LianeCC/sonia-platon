export type HorseFormValues = {
  name: string;
  age: number;
  height: number;
  breed: string;
  saddleBrand: string;
  saddleModel: string;
  disciplines: string;
  reason: string;
  horseIssues: string;
  riderIssues: string;
  image?: File;
};

export type FormValues = {
  nom: string;
  prenom: string;
  taille: number;
  taillePantalon: string;
  telephone: string;
  email: string;
  adresse: string;
  codePostal: string;
  ville: string;

  adresseDiff: boolean;
  lieuNom?: string;
  lieuAdresse?: string;
  lieuCodePostal?: string;
  lieuVille?: string;
  lieuPrecisions?: string;

  chevaux: HorseFormValues[];
};

export type PersonalInfo = {
  nom: string;
  prenom: string;
  taille: number;
  taillePantalon: string;
  telephone: string;
  email: string;
  adresse: string;
  codePostal: string;
  ville: string;

  adresseDiff: boolean;
  lieuNom?: string;
  lieuAdresse?: string;
  lieuCodePostal?: string;
  lieuVille?: string;
  lieuPrecisions?: string;
};