import React from "react";
import PlaceholderImg from "../assets/images/placeholder.jpg";
import CoffeecientLogo from "../assets/images/coffeecient-logo-removebg-preview.png";

const AboutPage = () => {
  return (
    <>
      <main class="px-8 py-16 max-w-6xl mx-auto text-center">
        <h2 class="text-5xl font-bold mb-3">ABOUT US</h2>
        <h3 class="text-3xl font-semibold text-[#A47149] mb-6">
          Brewed with Passion.
          <br />
          Baked with Heart
        </h3>
        <p class="text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed text-base">
          At Coffecient, we believe that the best days start with a warm cup of
          coffee and a fresh pastry straight from the oven. Founded in 2024, our
          local coffee and bakery hub was born out of a love for handcrafted
          flavors and meaningful moments shared over food and drink. We
          specialize in artisan coffee—both hot and brewed for delivery within
          our community—and homemade breads and pastries baked daily with the
          finest ingredients. For those beyond our neighborhood, we ship our
          signature powdered coffees so you can enjoy the same rich flavor,
          wherever you are. Every cup is brewed with precision, and every loaf
          is kneaded with care. Our mission is simple: to bring people together
          through comfort, flavor, and a touch of home in every order. From our
          kitchen to your doorstep—thank you for being part of our story.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <img
            src={PlaceholderImg}
            alt="Image 1"
            class="object-cover h-96 w-full "
          />
          <img
            src={PlaceholderImg}
            alt="Image 2"
            class="object-cover h-96 w-full "
          />
          <img
            src={PlaceholderImg}
            alt="Image 3"
            class="object-cover h-96 w-full "
          />
        </div>
      </main>
    </>
  );
};
export default AboutPage;
