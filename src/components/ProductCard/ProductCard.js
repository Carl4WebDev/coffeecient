import { MagicCard } from "./MagicCard";

const ProductCard = ({
  image,
  name,
  price,
  description, // Added description prop
}) => {
  return (
    <div className="group bg-[#15332B] text-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      {/* Image Container with subtle frame */}

      <div className="relative p-4 bg-[#1a3b32] group-hover:bg-[#1f453a] transition-colors duration-300 rounded-md">
        <MagicCard>
          <div className="relative overflow-hidden aspect-square rounded-md">
            {/* Added aspect-square for consistent ratio */}
            {/* Image with overlay container */}
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={name}
                className={`object-cover w-full h-full bg-contain transition-transform duration-500 group-hover:scale-110`}
              />
              {/* Dark overlay with description */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center p-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm text-center">{description}</p>
              </div>
            </div>
          </div>
          {/* Price Tag */}
          <div className="absolute bottom-4 right-4 bg-[#a26d3c] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md z-10">
            ${price}
          </div>
        </MagicCard>
      </div>

      {/* Content */}
      <div className="bg-bg-navbar p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-xl mb-2 text-black text-center">
          {name}
        </h3>

        <button className="mt-auto bg-[#a26d3c] hover:bg-[#8b572a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
