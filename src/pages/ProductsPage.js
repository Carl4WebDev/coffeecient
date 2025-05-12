import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import Coffee from "../assets/images/coffee.jpg";
import Merchats from "../assets/images/merchants.jpg";
import Left from "../assets/images/left.jpg";
import Mid from "../assets/images/mid.jpg";
import Right from "../assets/images/right.jpg";
import PlaceholderImg from "../assets/images/placeholder.jpg";
import CoffeecientLogo from "../assets/images/coffeecient-logo-removebg-preview.png";
import { Testing } from "../components/Testing/Testing";
import ProductCarousel from "../components/ProductCard/ProductCarousel";
import ParticleEffect from "../components/ParticleEffect/ParticleEffect";
import GradientBorderEffect from "../components/GradientBorder/GradientBorderEffect";

import ProductBanner from "../assets/coffeecient-images/product-banner.jpg";
import GirlBanner from "../assets/coffeecient-images/girl-coffeecient.png";

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
      <section className="w-full flex justify-center ">
        <img src={ProductBanner} className="h-96 w-11/12 object-fill" />
      </section>

      <section className="p-4 mb-4">
        <div className="w-full">
          <h2 className="text-4xl font-bold ml-5 mb-2 mt-10 text-start">
            Coffee and Drinks
          </h2>
          <ProductCarousel products={products} />
        </div>
      </section>

      <section className="p-4 ">
        <div className="w-full px-2">
          <h2 className="text-4xl font-bold ml-5 mb-2 mt-4 text-start">
            Pastries and Breads
          </h2>
          <ProductCarousel products={products} />
        </div>
      </section>

      <section className="p-4 ">
        <div className="w-full px-2">
          <h2 className="text-4xl font-bold ml-5 mb-2 mt-4 text-start">
            Packed Coffee
          </h2>
          <ProductCarousel products={products} />
        </div>
      </section>

      <section className="min-w-full bg-white  p-4 grid grid-cols-1 md:grid-cols-10 gap-4">
        <div className="col-span-4 flex flex-col items-end justify-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold">we also offers</h1>
            <span className="text-5xl font-bold text-[#A47149]">MERCHANTS</span>
          </div>
        </div>
        <div className="col-span-6">
          <img src={GirlBanner} className=" w-full" />
        </div>
      </section>

      <section className="px-10 pb-20 mt-10">
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
