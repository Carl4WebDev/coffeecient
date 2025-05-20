import { MagicCard } from "./MagicCard";
import ParticleEffect from "../ParticleEffect/ParticleEffect";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ image, name, price, description }) => {
  const { addToCart, removeFromCart, cartList, updateQuantity } = useCart();

  const isInCart = cartList.some((item) => item.name === name);
  const cartItem = cartList.find((item) => item.name === name);
  const quantity = cartItem?.quantity || 0;

  function handleAdd() {
    addToCart({
      image,
      name,
      price,
      description,
    });
  }

  function handleRemove() {
    removeFromCart({
      image,
      name,
      price,
      description,
    });
  }

  function handleQuantityChange(newQuantity) {
    if (newQuantity < 1) return;
    updateQuantity(
      {
        image,
        name,
        price,
        description,
      },
      newQuantity
    );
  }

  return (
    <div className="group bg-[#15332B] text-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      {/* Image Container with subtle frame */}
      <div className="relative p-4 bg-[#1a3b32] group-hover:bg-[#1f453a] transition-colors duration-300 rounded-md">
        <MagicCard>
          <div className="relative overflow-hidden aspect-square rounded-md">
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={name}
                className={`object-cover p-1 w-full h-full bg-contain transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center p-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm text-center">{description}</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-[#a26d3c] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md z-10">
            ₱{price}
          </div>
        </MagicCard>
      </div>

      {/* Content */}
      <div className="bg-bg-navbar p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-xl mb-2 text-black text-center">
          {name}
        </h3>

        {/* Added quantity controls - matches existing design */}
        {isInCart && (
          <div className="flex items-center justify-center mb-3">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="bg-[#a26d3c] text-white w-8 h-8 rounded-l-md flex items-center justify-center hover:bg-[#8b572a] transition-colors"
            >
              -
            </button>
            <span className="bg-gray-100 text-gray-800 px-4 py-1">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="bg-[#a26d3c] text-white w-8 h-8 rounded-r-md flex items-center justify-center hover:bg-[#8b572a] transition-colors"
            >
              +
            </button>
          </div>
        )}

        <ParticleEffect options={{ particleCount: 10, size: 10 }}>
          {isInCart ? (
            <button
              onClick={handleRemove}
              className="w-full mt-auto bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 active:scale-95"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="w-full mt-auto bg-[#a26d3c] hover:bg-[#8b572a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 active:scale-95"
            >
              Add to Cart
            </button>
          )}
        </ParticleEffect>
      </div>
    </div>
  );
};

export default ProductCard;
