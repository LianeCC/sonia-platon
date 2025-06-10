import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Card from "../../components/Card";
import FAQ from "../../components/Faq";
import etapes from "@/data/etapes.json";

export default function Accueil() {
  return (
    <>
      <Hero />

      <Section title="Les 4 étapes d'un saddle fitting" background="dark">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {etapes.map(({ title, text, icon }) => (
            <Card key={title} title={title} text={text} icon={icon} />
          ))}
        </div>
      </Section>

      <FAQ />

      <Section title="Qui suis-je ?" background="dark" image="/portrait.jpg">
        <p>
          Texte de présentation de Sonia Platon, saddle fitter professionnelle,
          passionnée par le bien-être cheval-cavalier, etc...
        </p>
      </Section>
    </>
  );
}