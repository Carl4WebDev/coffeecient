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
      name: "Super Coffee",
      price: "9.99",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageHeight: "h-24",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      name: "Haplas",
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
      <section className="min-w-full h-72">
        <img src={PlaceholderImg} className="h-80 w-full" />
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

      <section className="min-w-full h-96">
        <img src={PlaceholderImg} className="h-96 w-full" />
      </section>

      <section className="px-10 pb-20 mt-10">
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
