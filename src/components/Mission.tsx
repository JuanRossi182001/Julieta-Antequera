const Mission = () => {
  return (
    <section id="mission" className="relative py-20 bg-fika-cream overflow-hidden">
      {/* Scalloped top edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 20">
          <path d="M0,20 Q30,0 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,0 L0,0 Z" fill="#fff5f0"/>
        </svg>
      </div>

      {/* Scalloped bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 20">
          <path d="M0,0 Q30,20 60,0 T120,0 T180,0 T240,0 T300,0 T360,0 T420,0 T480,0 T540,0 T600,0 T660,0 T720,0 T780,0 T840,0 T900,0 T960,0 T1020,0 T1080,0 T1140,0 T1200,0 L1200,20 L0,20 Z" fill="#fff5f0"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">
            <span className="text-gray-800">Inspired.</span>{' '}
            <span className="text-fika-pink" style={{ fontStyle: 'italic' }}>Empowered.</span>{' '}
            <span className="text-gray-800">Conscious.</span>
          </h2>
          <p className="text-xl sm:text-2xl mb-6 text-balance">
            <span className="text-fika-pink italic">Welcome to</span>{' '}
            <span className="text-fika-orange font-bold">Fika.</span>{' '}
            <span className="text-gray-800">We are a <span className="text-fika-pink italic">responsibly sourced</span> clothing brand on a <span className="text-fika-pink italic">mission</span> to change the <span className="text-fika-pink italic">future</span> of fashion by doing things right down.</span>
          </p>
          <button className="bg-fika-hot-pink text-white px-8 py-3 rounded-full font-bold hover:bg-fika-pink transition shadow-lg mt-6">
            LET'S SHOP!
          </button>
        </div>

        {/* Decorative circle */}
        <div className="absolute top-1/2 right-10 w-32 h-32 border-4 border-pink-300 rounded-full opacity-50 hidden lg:block"></div>
      </div>
    </section>
  )
}

export default Mission
