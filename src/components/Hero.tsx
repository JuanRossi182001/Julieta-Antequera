const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-16 bg-gradient-to-br from-[#6B8E23] to-[#556B2F] min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#6B8E23] opacity-30"></div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-lime-300 hover:bg-lime-400 rounded-full p-3 shadow-lg transition z-10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-lime-300 hover:bg-lime-400 rounded-full p-3 shadow-lg transition z-10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontStyle: "italic" }}>
              La calidez de la casa de la nona
            </h1>
          </div>

          <div className="flex-1 relative">
            <div className="aspect-square max-w-md mx-auto">
              <img
                src="hero.jpg"
                alt="Fashion models in colorful dresses"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
