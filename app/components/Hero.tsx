export default function Hero() {
  return (
    <section
      className="w-full bg-cover bg-center text-white flex flex-col items-center justify-center py-20 px-4"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <h1 className="text-5xl font-bold">Sonia Platon</h1>
      <p className="text-xl mt-2">Saddle fitting</p>
      <div className="mt-6 flex gap-4">
        <a
          href="/saddle-fitting"
          className="bg-[#001845] px-6 py-3 text-white rounded"
        >
          Qu&apos;est-ce que le saddle fitting
        </a>
        <a
          href="/rendez-vous"
          className="bg-[#0465c7] px-6 py-3 text-white rounded"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}