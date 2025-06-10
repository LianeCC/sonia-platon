import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Sectionwhite from "../../components/Sectionwhite";
import Card from "../../components/Card";
import FAQ from "../../components/Faq";
import etapes from "@/data/etapes.json";

export default function Accueil() {
  return (
    <>
      <Hero />

      <Sectionwhite title="Les 4 étapes d'un saddle fitting">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {etapes.map(({ title, text, icon }) => (
            <Card key={title} title={title} text={text} icon={icon} />
          ))}
        </div>
      </Sectionwhite>

      <FAQ />

      <Section title="Qui suis-je ?" background="dark" image="/images/pilou.jpg">
        <p>Je m’appelle Sonia Platon, saddle fitter indépendante installée dans le 13 depuis 2018.</p>
        <br />
        <p>Technicienne de formation, j’ai toujours aimé analyser, comprendre et améliorer les choses. C’est en cherchant à optimiser le confort de mon propre cheval, Boléro, que j’ai découvert le saddle fitting. Ce qui était au départ un simple intérêt personnel est vite devenu une véritable passion, au point de me reconvertir dans ce métier.</p>
        <br />
        <p>Aujourd’hui, j’accompagne les cavaliers et leurs chevaux pour trouver la selle la plus adaptée, en toute indépendance, avec une approche technique et éthique. Pour moi, le saddle fitting ne se résume pas à un simple ajustement de selle : c’est une condition essentielle au bien-être du cheval et du cavalier.</p>
        <br />
        <p>Un couple en harmonie, c’est avant tout du confort et de la sérénité. Je suis convaincue que sans une selle adaptée, il est impossible d’obtenir des performances optimales. Mon rôle est de vous aider à construire cette connexion essentielle, où le bien-être précède toujours la performance.</p>
      </Section>
    </>
  );
}