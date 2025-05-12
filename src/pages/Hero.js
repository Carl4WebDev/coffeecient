import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import Coffee from "../assets/images/coffee.jpg";
import Merchats from "../assets/images/merchants.jpg";
import Left from "../assets/images/left.jpg";
import Mid from "../assets/images/mid.jpg";
import Right from "../assets/images/right.jpg";

import PlaceholderImg from "../assets/images/placeholder.jpg";
import CoffeecientLogo from "../assets/images/coffeecient-logo-removebg-preview.png";
import LeftImage from "../assets/coffeecient-images/left-image.png";
import RightImage from "../assets/coffeecient-images/right-image.png";
import CenterImage from "../assets/coffeecient-images/center-image.png";
import HomeImage from "../assets/coffeecient-images/home.jpg";
import HomeMidImage from "../assets/coffeecient-images/home2.jpg";

import { Testing } from "../components/Testing/Testing";
import ProductCarousel from "../components/ProductCard/ProductCarousel";
import ParticleEffect from "../components/ParticleEffect/ParticleEffect";
import GradientBorderEffect from "../components/GradientBorder/GradientBorderEffect";

import { Link } from "react-router-dom";

// banner
import PackedCoffee1 from "../assets/coffeecient-images/packedcoffee1.png";

// Products
import Seashore from "../assets/coffeecient-images/seashore.png";
import Valerina from "../assets/coffeecient-images/valerina.png";
import CreamyWhite from "../assets/coffeecient-images/creamywhite.png";
import Monay from "../assets/coffeecient-images/monay.png";
import ChocoBread from "../assets/coffeecient-images/chocobread.png";
import Pie from "../assets/coffeecient-images/pie.png";

// merchants
import Mug from "../assets/coffeecient-images/mug.png";
import Shirt from "../assets/coffeecient-images/shirt.png";
import Bag from "../assets/coffeecient-images/bag.png";

const Hero = () => {
  const products = [
    {
      image: Seashore,
      name: "Seashore Cream",
      price: "19.99",
      description:
        "A rich, velvety cream with soothing sea minerals for soft, hydrated skin.",
      imageHeight: "h-40",
    },
    {
      image: Valerina,
      name: "Valerina Capucino",
      price: "17.99",
      description:
        "Smooth cappuccino blend with a hint of vanilla for a luxurious coffee experience.",
      imageHeight: "h-40",
    },
    {
      image: CreamyWhite,
      name: "Creamy White",
      price: "9.99",
      description:
        "Light and fluffy cream perfect for brightening and moisturizing your skin.",
      imageHeight: "h-40",
    },
    {
      image: Monay,
      name: "Monay Nanay",
      price: "6.99",
      description:
        "A classic Filipino bread, soft and slightly sweet—perfect with coffee.",
      imageHeight: "h-24",
    },
    {
      image: ChocoBread,
      name: "Super Coffee",
      price: "9.99",
      description:
        "Bold, chocolate-infused coffee for an energizing morning boost.",
      imageHeight: "h-24",
    },
    {
      image: Pie,
      name: "Haplas",
      price: "8.99",
      description:
        "Crumbly, buttery pastry with a delightful melt-in-your-mouth texture.",
      imageHeight: "h-24",
    },
  ];
  const merchItems = [
    {
      id: 1,
      image: Mug,
      alt: "Shirt",
      name: "Coffecient Mug",
      price: "24.99",
      description:
        "Premium ceramic mug with a sleek design—perfect for your daily brew.",
      width: "w-32",
      height: "h-32",
    },
    {
      id: 2,
      image: Shirt,
      alt: "Mug",
      name: "Signature Shirt",
      price: "12.99",
      description:
        "Comfortable cotton tee with a minimalist coffee-themed print.",
      width: "w-24",
      height: "h-24",
    },
    {
      id: 3,
      image: Bag,
      alt: "Cap",
      name: "Coffeecient Bag",
      price: "15.99",
      description:
        "Stylish tote bag with durable fabric—ideal for coffee runs and errands.",
      width: "w-24",
      height: "h-24",
    },
  ];

  return (
    <>
      <section className="flex items-center justify-center mt-4 md:px-5 gap-y-20 sm:gap-24 md:gap-36 lg:gap-96 flex-wrap min-w-full">
        <div className="space-y-3 text-center">
          <div className="text-5xl font-bold text-[#3b2519] flex items-center justify-center">
            <img src={CoffeecientLogo} className="min-w-24 w-72" />
          </div>

          <Link to="auth-page">
            <ParticleEffect options={{ particleCount: 10, size: 10 }}>
              <button className="mt-5 bg-[#a26d3c] text-white text-base px-6 py-2 rounded shadow hover:bg-[#8b572a] transition">
                Order now →
              </button>
            </ParticleEffect>
          </Link>
        </div>

        <div className="flex md:gap-4 justify-center items-center ">
          {/* Left Image - vertically centered */}
          <div className="w-32 min-w-8 sm:translate-x-0 translate-x-16 hover:z-20 h-[400px] flex items-center justify-center overflow-hidden rounded shadow-md">
            <img
              src={HomeImage}
              alt=""
              className="w-full h-full object-fill transition duration-300 ease-in-out hover:-translate-y-6 hover:scale-110"
            />
          </div>

          {/* Center Image - tallest */}
          <div className="w-52 min-w-10 duration-300 ease-in-out h-[520px] z-10  overflow-hidden rounded shadow-lg">
            <img
              src={Mid}
              alt=""
              className="w-full h-full object-fill transition duration-300 ease-in-out hover:-translate-y-6 hover:scale-110"
            />
          </div>

          {/* Right Image - vertically centered */}
          <div className="w-32 min-w-8  sm:-translate-x-0 -translate-x-16 hover:z-20 h-[400px] flex items-center justify-center overflow-hidden rounded shadow-md">
            <img
              src={HomeMidImage}
              alt=""
              className="w-full h-full object-fill  transition duration-300 ease-in-out hover:-translate-y-6 hover:scale-110"
            />
          </div>
        </div>
      </section>

      <section className="px-10 pb-20">
        <h2 className="text-4xl font-bold mb-10 mt-10 text-center">
          BEST SELLER
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              imageHeight={product.imageHeight}
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12   gap-4 bg-[#2C1B18] items-center ">
        <div className="col-span-4 p-12">
          <div className="  border-gray-200 flex items-center justify-center bg-[#EFE1D6] rounded-md mb-2">
            <img src={CoffeecientLogo} className="h-20 w-44" />
          </div>
          <div className="flex flex-col justify-between items-start">
            <div>
              <div className="text-3xl font-bold text-white">we offer on</div>
              <div className="text-3xl font-bold text-[#77512d]">
                packed coffee
              </div>
            </div>
            <Link to="auth-page">
              <ParticleEffect options={{ particleCount: 10, size: 10 }}>
                <button className="mt-5 bg-[#a26d3c] text-white text-base px-6 py-2 rounded shadow hover:bg-[#8b572a] transition">
                  Order now →
                </button>
              </ParticleEffect>
            </Link>
          </div>
        </div>
        <div className="col-span-8">
          <img
            src={PackedCoffee1}
            className="h-80 min-h-48  w-full transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-100"
          />
        </div>
      </section>

      <section className="px-10 pb-20">
        <h2 className="text-4xl font-bold mb-10 mt-10 text-center">
          LIMITED MERCH
        </h2>
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
    </>
  );
};

export default Hero;
