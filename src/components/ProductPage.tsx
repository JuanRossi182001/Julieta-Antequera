import { useState } from "react";
import { Product } from "../App";
import { ArrowLeft, Heart, ShoppingCart } from "lucide-react";

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const ProductPage = ({ product, onBack }: ProductPageProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor selecciona un talle");
      return;
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <section className="py-8 md:py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
          <span className="font-medium">Volver a inicio</span>
        </button>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Product Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-2xl bg-gray-50">
                <img
                  src={product.image || "placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 px-4 py-2 text-sm font-bold rounded-full ${
                      product.badge === "SALE"
                        ? "bg-fika-orange text-white"
                        : "bg-lime-300 text-gray-800"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            {/* Product Name & Price */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-balance">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-fika-hot-pink">
                {product.price}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description ||
                  "Prenda confeccionada con materiales de origen responsable. Diseño moderno y versátil para cualquier ocasión."}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Seleccionar Talle
              </label>
              <div className="flex flex-wrap gap-3">
                {(product.sizes || ["XS", "S", "M", "L", "XL"]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg font-semibold border-2 transition ${
                      selectedSize === size
                        ? "bg-fika-hot-pink text-white border-fika-hot-pink"
                        : "bg-white text-gray-700 border-gray-300 hover:border-fika-pink"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Cantidad
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-gray-400 font-bold text-xl transition"
                >
                  -
                </button>
                <span className="text-2xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-gray-400 font-bold text-xl transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-full font-bold text-lg transition shadow-lg ${
                  addedToCart
                    ? "bg-green-500 text-white"
                    : "bg-fika-hot-pink text-white hover:bg-fika-pink"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {addedToCart ? "¡Agregado!" : "Agregar al Carrito"}
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`px-6 py-4 rounded-full border-2 transition ${
                  isFavorite
                    ? "bg-fika-pink text-white border-fika-pink"
                    : "bg-white text-gray-700 border-gray-300 hover:border-fika-pink"
                }`}
              >
                <Heart
                  className={`w-6 h-6 ${
                    isFavorite ? "fill-current" : ""
                  }`}
                />
              </button>
            </div>

            {/* Product Info */}
            <div className="border-t border-gray-200 pt-8 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Material</h3>
                <p className="text-gray-600">
                  Tejido de origen responsable, suave y duradero
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Cuidado</h3>
                <p className="text-gray-600">
                  Lavar a máquina con agua fría, secar al aire
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Envío</h3>
                <p className="text-gray-600">
                  Envío gratis en compras superiores a $150
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
