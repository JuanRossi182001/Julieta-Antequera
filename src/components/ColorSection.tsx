const ColorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-fika-olive to-fika-olive">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Images */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-4">
                <div className="aspect-square bg-white rounded-full overflow-hidden">
                  <img
                    src="foto1.jpeg"
                    alt="Fashion model 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden">
                  <img
                    src="foto2.jpeg"
                    alt="Fashion models celebrating"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1 space-y-4">
                <div className="aspect-square bg-white rounded-full overflow-hidden">
                  <img
                    src="foto3.jpeg"
                    alt="Fashion model 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="aspect-square bg-white rounded-full overflow-hidden">
                  <img
                    src="foto4.jpeg"
                    alt="Fashion model 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              En Nona somos <span className="italic">apasionadas</span> por la memoria, la nostalgia y la calidez de la{" "}
              <span className="italic">casa de la nona</span>.
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Creamos ropa inspirada en las abuelas argentinas: esas que con amor, paciencia y mucho sabor transmiten
              sus tradiciones de generación en generación. Cada prenda nace de sus tejidos, sus colores y sus detalles,
              llevando siempre un pedacito de hogar y de cultura argentina para que la lleves con vos todos los días.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Queremos que nuestras prendas sean mucho más que ropa: sean historias que acompañan, recuerdos que
              inspiran y un puente vivo con nuestras raíces. Cada diseño es un acto de cariño, un homenaje a esas
              mujeres que tejieron nuestras vidas con sus manos y su corazón. Colaboramos con cosedoras artesanales,
              visibilizando su arte y sus historias, construyendo juntas una comunidad que honra el pasado mientras
              diseña el futuro.
            </p>
            <button className="bg-lime-300 text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-lime-400 transition shadow-lg">
              MÁS SOBRE NONA
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ColorSection
