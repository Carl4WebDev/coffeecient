import React from "react";
import PlaceholderImg from "../assets/images/placeholder.jpg";
import CoffeecientLogo from "../assets/images/coffeecient-logo-removebg-preview.png";

import About1 from "../assets/coffeecient-images/aboutus_pic1.jpg";
import About2 from "../assets/coffeecient-images/aboutus_pic2.jpg";
import About3 from "../assets/coffeecient-images/aboutus_pic3.jpg";
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
          {/* Image 1 - Brewing Action */}
          <div class="relative group">
            <img
              src={About1}
              alt="Barista brewing coffee"
              class="object-fill h-96 w-full rounded-md transition duration-300 ease-in-out group-hover:-translate-y-6 group-hover:-rotate-3 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-md transition duration-300 flex items-center justify-center">
              <p class="text-white text-center p-4">
                <strong>Watch our baristas</strong> craft your espresso with
                precision—every shot pulled to perfection.
              </p>
            </div>
          </div>

          {/* Image 2 - Café Experience */}
          <div class="relative group">
            <img
              src={About2}
              alt="Friends chatting in café"
              class="object-fill h-96 w-full rounded-md transition duration-300 ease-in-out group-hover:-translate-y-6 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-md transition duration-300 flex items-center justify-center">
              <p class="text-white text-center p-4">
                <strong>Join the conversation</strong> in our sunlit space—where
                ideas flow as smoothly as our cold brew.
              </p>
            </div>
          </div>

          {/* Image 3 - Learning */}
          <div class="relative group">
            <img
              src={About3}
              alt="Barista teaching coffee art"
              class="object-fill h-96 w-full rounded-md transition duration-300 ease-in-out group-hover:-translate-y-6 group-hover:rotate-3 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-md transition duration-300 flex items-center justify-center">
              <p class="text-white text-center p-4">
                <strong>Learn the secrets</strong> behind latte art—book a
                workshop and swirl your own masterpiece.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AboutPage;
