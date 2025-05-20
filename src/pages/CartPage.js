import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard/ProductCard"; // Make sure to import your ProductCard component

// merchants
import Mug from "../assets/coffeecient-images/mug.png";
import Shirt from "../assets/coffeecient-images/shirt.png";
import Bag from "../assets/coffeecient-images/bag.png";
import { Link } from "react-router-dom";

const EmptyCard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const size = 400;
    canvas.width = size;
    canvas.height = size;

    // Draw obvious coffee cup with steam and "COFFEE" text
    ctx.fillStyle = "#6F4E37"; // Coffee brown
    // Cup body
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(120, 150);
    ctx.lineTo(280, 150);
    ctx.lineTo(300, 300);
    ctx.fill();

    // Cup rim
    ctx.beginPath();
    ctx.ellipse(200, 150, 80, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Coffee liquid with "COFFEE" text
    ctx.fillStyle = "#4B3621";
    ctx.beginPath();
    ctx.ellipse(200, 200, 70, 15, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("COFFEE", 200, 205);

    // Bigger, more visible steam
    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 8;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(180 + i * 20, 120);
      ctx.bezierCurveTo(170 + i * 20, 70, 190 + i * 20, 50, 180 + i * 20, 30);
      ctx.stroke();
    }

    // Sad face with tears
    ctx.fillStyle = "#000000";
    // Eyes
    ctx.beginPath();
    ctx.arc(170, 180, 10, 0, Math.PI * 2);
    ctx.arc(230, 180, 10, 0, Math.PI * 2);
    ctx.fill();
    // Frowning mouth
    ctx.beginPath();
    ctx.arc(200, 220, 15, 0.2 * Math.PI, 0.8 * Math.PI, true);
    ctx.lineWidth = 3;
    ctx.stroke();
    // Tears
    ctx.fillStyle = "#87CEEB";
    ctx.beginPath();
    ctx.ellipse(175, 210, 3, 8, 0, 0, Math.PI);
    ctx.ellipse(225, 210, 3, 8, 0, 0, Math.PI);
    ctx.fill();

    // Coffee bean characters
    // Bean 1 (left)
    ctx.fillStyle = "#3E2723";
    ctx.beginPath();
    ctx.ellipse(80, 250, 20, 10, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    // Face
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(75, 245, 3, 0, Math.PI * 2); // Left eye
    ctx.arc(85, 245, 3, 0, Math.PI * 2); // Right eye
    ctx.fill();
    ctx.beginPath();
    ctx.arc(80, 255, 4, 0.2 * Math.PI, 0.8 * Math.PI); // Smile
    ctx.stroke();

    // Bean 2 (right)
    ctx.fillStyle = "#5D4037";
    ctx.beginPath();
    ctx.ellipse(320, 270, 20, 10, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    // Face
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(315, 265, 3, 0, Math.PI * 2); // Left eye
    ctx.arc(325, 265, 3, 0, Math.PI * 2); // Right eye
    ctx.fill();
    ctx.beginPath();
    ctx.arc(320, 275, 4, 0.2 * Math.PI, 0.8 * Math.PI); // Smile
    ctx.stroke();

    // Speech bubble from left bean
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.roundRect(50, 200, 100, 40, 10);
    ctx.fill();
    ctx.font = "12px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Fill me up!", 100, 225);
  }, []);

  return (
    <div className="flex flex-col items-center hover:border-[#e6c3a9] hover:border-2">
      <Link to="/products-page">
        <canvas
          ref={canvasRef}
          className="mb-4"
          style={{
            width: "300px",
            height: "300px",
            filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.15))",
          }}
        />
        <p className="text-gray-500 text-2xl font-bold mt-4 hover:text-btn-login">
          Your cart is empty
        </p>
        <p className="text-gray-400 text-lg hover:text-btn-login">
          Add some coffee goodness!
        </p>
      </Link>
    </div>
  );
};

const CartPage = () => {
  const { cartList, total, removeFromCart, updateQuantity } = useCart();
  const [isMerchantModalOpen, setIsMerchantModalOpen] = useState(false);

  const merchItems = [
    {
      id: 1,
      image: Mug,
      name: "Coffecient Mug",
      price: 24.99,
      description:
        "Premium ceramic mug with a sleek design—perfect for your daily brew.",
    },
    {
      id: 2,
      image: Shirt,
      name: "Signature Shirt",
      price: 12.99,
      description:
        "Comfortable cotton tee with a minimalist coffee-themed print.",
    },
    {
      id: 3,
      image: Bag,
      name: "Coffeecient Bag",
      price: 15.99,
      description:
        "Stylish tote bag with durable fabric—ideal for coffee runs and errands.",
    },
  ];

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(product, newQuantity);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto ">
        <div className="flex justify-between items-center mb-8 ">
          <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
          <button
            onClick={() => setIsMerchantModalOpen(true)}
            className="bg-[#a26d3c] hover:bg-[#8b572a] text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Browse Merchandise
          </button>
        </div>

        {/* Merchant Modal */}
        {isMerchantModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-center w-full">
                    LIMITED MERCH
                  </h2>
                  <button
                    onClick={() => setIsMerchantModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Your merch section integrated into modal */}
                <section className="px-10 pb-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {merchItems.map((product, index) => (
                      <ProductCard
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                      />
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* Existing Cart Content */}
        {cartList.length === 0 ? (
          <div className="text-center py-12 ">
            <EmptyCard />
          </div>
        ) : (
          <div className="bg-[#EFE1D6] rounded-lg shadow-md overflow-hidden text-[#48515F]">
            <div className="divide-y divide-gray-200">
              {cartList.map((item) => (
                <div key={item.name} className="p-6 flex flex-col sm:flex-row">
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium ">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="ml-4 font-medium">
                        ₱{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="mt-4 sm:mt-0 text-btn-login hover:text-btn-login"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex justify-between text-lg font-medium text-gray-900">
                <span>Total</span>
                <span>₱{total.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full bg-btn-login  text-white py-2 px-4 rounded-md hover:bg-[#EFE1D6]">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
