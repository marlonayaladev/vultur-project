export default function HomeBanner() {
  return (
    <section className="w-full flex justify-center bg-gradient-to-r from-black via-gray-800 to-gray-400">
  
  <div className="w-full max-w-[1400px] px-4 py-10 grid md:grid-cols-3 items-center gap-6 text-white">

    {/* IZQUIERDA */}
    <div className="space-y-4 text-white">
      <p>🚚 ENVIOS A TODO EL PERU</p>
      <p>🗽 IMPORTADAS DE USA</p>
    </div>

    {/* CENTRO */}
    <div className="text-center">
      <h1 className="text-5xl md:text-6xl font-black stroke-black">
        VULTUR <br /> CYBER
      </h1>

      <button className="mt-6 bg-red-600 px-6 py-3 rounded-full font-bold">
        COMPRAR AHORA
      </button>
    </div>

    {/* DERECHA */}
    <div className="text-center md:text-right">
      <p className="text-red-500 italic">Hasta</p>

      <h2 className="text-[100px] font-black text-red-600 leading-none">
        50%
      </h2>

      <p className="text-red-600 font-bold">OFF</p>

      <div className="flex justify-center md:justify-end gap-3 mt-4 flex-wrap">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/de/d/d7/Puma_Logo.svg" className="h-6" />
        <img src="/new-balance-logo.svg" className="h-6" alt="New Balance" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Vans_company_logo.svg" className="h-6" />
      </div>
    </div>

  </div>
</section>
  );
}