const ColorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-fika-hot-pink to-pink-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Images */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-4">
                <div className="aspect-square bg-white rounded-full overflow-hidden">
                  <img 
                    src="/woman-in-pink-dress-fashion.jpg"
                    alt="Fashion model 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden">
                  <img 
                    src="/three-women-in-pink-dresses-celebrating-fashion.jpg"
                    alt="Fashion models celebrating"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1 space-y-4">
                <div className="aspect-square bg-white rounded-full overflow-hidden">
                  <img 
                    src="/woman-in-pink-outfit-fashion.jpg"
                    alt="Fashion model 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="aspect-square bg-white rounded-full overflow-hidden">
                  <img 
                    src="/woman-in-pink-dress-smiling.jpg"
                    alt="Fashion model 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              We're <span className="italic">passionate</span> about colour and celebrating the <span className="italic">vibrant hues</span> and the joyful feelings they bring when worn.
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Our goal is to empower every woman with confidence through vibrant design, embracing bold colour, encouraging women to celebrate their differences in body type, age, beliefs and lifestyle choices. Our vision is to transform life by making these colours as much a part of everyday living as breathing, connecting ourselves to something bigger, to life, to joy, to infinity, compassion or forgiveness.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Made in wider and designed in Manchester, UK...we are using yarn (or hemp-sourced fabrics) and empowers women to celebrate and feel secure. We sustainably source our stock, look after our artisans, compensate our workforce fairly...always looking for partners who share our values.
            </p>
            <button className="bg-lime-300 text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-lime-400 transition shadow-lg">
              MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ColorSection
