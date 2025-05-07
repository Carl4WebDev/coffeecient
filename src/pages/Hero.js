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
const Hero = () => {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      name: "Seashore Cream",
      price: "19.99",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageHeight: "h-40",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      name: "Valerina Capucino",
      price: "17.99",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageHeight: "h-40",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      name: "Creamy White",
      price: "9.99",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageHeight: "h-40",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      name: "Monay Nanay",
      price: "6.99",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageHeight: "h-24",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      name: "Ratbu",
      price: "9.99",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageHeight: "h-24",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      name: "Key Pie",
      price: "8.99",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageHeight: "h-24",
    },
  ];

  const merchItems = [
    {
      id: 1,
      image: "shirt.png",
      alt: "Shirt",
      name: "Coffecient Shirt",
      price: "24.99",
      description:
        "Soft blended fabric, retro print design, slightly fitted cut. Eco-friendly inks used. Size XS-XL.",
      width: "w-32",
      height: "h-32",
    },
    {
      id: 2,
      image: "mug.png",
      alt: "Mug",
      name: "Signature Mug",
      price: "12.99",
      description:
        "Soft blended fabric, retro print design, slightly fitted cut. Eco-friendly inks used. Size XS-XL.",

      width: "w-24",
      height: "h-24",
    },
    {
      id: 3,
      image: "cap.png",
      alt: "Cap",
      name: "Barista Cap",
      price: "15.99",
      description:
        "Soft blended fabric, retro print design, slightly fitted cut. Eco-friendly inks used. Size XS-XL.",
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
          <button className="mt-5 bg-[#a26d3c] text-white text-base px-6 py-2 rounded shadow hover:bg-[#8b572a] transition">
            Order now →
          </button>
        </div>

        <div className="flex md:gap-4 justify-center items-center ">
          {/* Left Image - vertically centered */}
          <div className="w-32 min-w-8 sm:translate-x-0 translate-x-16 hover:z-20 h-[400px] flex items-center justify-center overflow-hidden rounded shadow-md">
            <img
              src={Left}
              alt=""
              className="w-full h-full object-cover transition duration-300 ease-in-out hover:-translate-y-6 hover:scale-110"
            />
          </div>

          {/* Center Image - tallest */}
          <div className="w-52 min-w-10 duration-300 ease-in-out h-[520px] z-10  overflow-hidden rounded shadow-lg">
            <img
              src={Mid}
              alt=""
              className="w-full h-full object-cover transition duration-300 ease-in-out hover:-translate-y-6 hover:scale-110"
            />
          </div>

          {/* Right Image - vertically centered */}
          <div className="w-32 min-w-8  sm:-translate-x-0 -translate-x-16 hover:z-20 h-[400px] flex items-center justify-center overflow-hidden rounded shadow-md">
            <img
              src={Right}
              alt=""
              className="w-full h-full object-cover  transition duration-300 ease-in-out hover:-translate-y-6 hover:scale-110"
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
              image={Coffee}
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
          <div
            className="  border-gray-200 flex items-center justify-center"
            style={{ border: "5px solid white" }}
          >
            <img src={CoffeecientLogo} className="h-20 w-44" />
          </div>
          <div className="flex flex-col justify-between items-start">
            <div>
              <div className="text-3xl font-bold text-white">we offer on</div>
              <div className="text-3xl font-bold text-[#77512d]">
                packed coffee
              </div>
            </div>
            <button className="mt-5 bg-[#a26d3c] text-white text-base px-6 py-2 rounded shadow hover:bg-[#8b572a] transition">
              Order now →
            </button>
          </div>
        </div>
        <div className="col-span-8 p-4">
          <img
            src={PlaceholderImg}
            className="h-72 min-h-48 w-full transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-100"
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
              image={Merchats}
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
