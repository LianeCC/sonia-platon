export default function Hero() {
  return (
    <section
      className="w-full min-h-[500px] bg-cover bg-center text-white flex flex-col items-center justify-center py-20 px-4"
      style={{ backgroundImage: "url('/images/accueil.jpg')" }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">Sonia Platon</h1>
      <p className="text-xl sm:text-2xl md:text-4xl mt-2 text-center">Saddle fitting</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="/saddle-fitting"
          className="bg-[#001845] px-6 py-3 text-white rounded-lg hover:bg-[#191970] transition-colors text-center"
        >
          Qu&apos;est-ce que le saddle fitting
        </a>
        <a
          href="/rendez-vous"
          className="bg-[#0465c7] px-6 py-3 text-white rounded-lg hover:bg-[#135190] transition-colors text-center"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}