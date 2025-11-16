import Image from "next/image";
import { Product } from "../App";

interface NewArrivalsProps {
  onProductClick?: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Angel Printed Midi Skirt",
    price: "$95.00",
    image: "/pink-printed-midi-skirt-fashion-model.jpg",
    badge: "NEW IN",
    description:
      "Vibrant printed midi skirt perfect for making a statement. Made from breathable, responsibly-sourced fabric with a comfortable elastic waistband.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Black Cropped Rib Top",
    price: "$48.00",
    image: "/black-cropped-rib-top-with-jeans.jpg",
    badge: "NEW IN",
    description:
      "Classic cropped rib top that pairs perfectly with high-waisted bottoms. Soft, stretchy fabric ensures all-day comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Black Relaxed Blazer",
    price: "$95.00",
    image: "/olive-green-skirt-outfit-fashion.jpg",
    badge: "NEW IN",
    description:
      "Elevated relaxed-fit blazer for effortless style. Tailored from premium sustainable materials with a modern silhouette.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Black Relaxed Sleeveless Top",
    price: "$58.00",
    image: "/beige-skirt-black-top-fashion-model.jpg",
    badge: "NEW IN",
    description:
      "Versatile sleeveless top with a relaxed fit. Perfect for layering or wearing solo in warmer weather.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Black Midi Dress",
    price: "$85.00",
    image: "/black-midi-dress-fashion-model.jpg",
    badge: "SALE",
    description:
      "Elegant midi dress designed for any occasion. Features a flattering silhouette with sustainable fabric blend.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const NewArrivals = ({ onProductClick }: NewArrivalsProps) => {
  return (
    <section id="new-arrivals" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Shop our <span className="text-fika-pink italic">New Arrivals</span>
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="w-full aspect-[3/4] relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${
                      product.badge === "SALE"
                        ? "bg-fika-orange text-white"
                        : "bg-lime-300 text-gray-800"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
              <button
                onClick={() => onProductClick?.(product)}
                className="mt-3 w-full bg-purple-100 text-purple-700 py-2 rounded-lg font-semibold hover:bg-purple-200 transition"
              >
                MORE DETAILS
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-fika-hot-pink text-white px-12 py-4 rounded-full font-bold hover:bg-fika-pink transition shadow-lg text-lg">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

