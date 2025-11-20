import { Product } from "../App";

interface NewArrivalsProps {
  onProductClick?: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Campera de jean Nona",
    price: "$95.00",
    image: "camperajean.jpeg",
    description:
      "Campera de jean oversize, con detalles a los costados, botones personalizados, forro receta y estampas exclusivas",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Pollera Nona",
    price: "$48.00",
    image: "pollera.jpg",
    description:
    "Pollera larga de broderie con una sobre pollera corta que se une en la parte de las presillas mediante tiras que terminan en un moño",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Remera Nona",
    price: "$95.00",
    image: "remera.jpeg",
    description:
      "Remera oversize estampa exclusiva Nona",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Top Nona",
    price: "$58.00",
    image: "top.jpeg",
    description:
      "Top de saplex embolsado doble con corte recto con estampa exclusiva.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

const NewArrivals = ({ onProductClick }: NewArrivalsProps) => {
  return (
    <section id="new-arrivals" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
           <span style={{ color: "#6B8E23", fontStyle: "italic" }}>Nuevos lanzamientos</span>
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image || "placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-300"
                />
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
      </div>
    </section>
  );
};

export default NewArrivals;
