import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-16 bg-gradient-to-br from-fika-peach to-pink-200 min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-pink-300 opacity-30"></div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-lime-300 hover:bg-lime-400 rounded-full p-3 shadow-lg transition z-10">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-lime-300 hover:bg-lime-400 rounded-full p-3 shadow-lg transition z-10">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              style={{ fontStyle: "italic" }}
            >
              It&apos;s Dress Season
            </h1>
            <div className="bg-yellow-300 inline-block px-6 py-3 rounded-full shadow-lg mb-8">
              <p className="text-sm font-bold text-gray-800">
                SALE • UPTO <span className="text-2xl">50% OFF</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                SHOP DRESSES
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="aspect-square max-w-md mx-auto">
              <Image
                src="/two-fashionable-women-in-pink-and-orange-dresses.jpg"
                alt="Fashion models in colorful dresses"
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

