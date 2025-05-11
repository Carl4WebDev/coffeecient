import React from "react";
import Coffee from "../../assets/images/coffeecient-logo-removebg-preview.png";
const Subsciption = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#2C1B18] p-5 mt-16 text-white">
      <div>
        <img
          src={Coffee}
          className="h-32 w-60 rounded-md -translate-y-16 bg-[#EFE1D6]"
          style={{ border: "2px solid #2C1B18" }}
        />
      </div>
      <div>
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold mb-3 text-center">
            Stay Updated
          </h2>
          <p className=" mb-4 text-center">
            Receive important news and updates straight to your inbox!
          </p>

          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-btn-login hover:bg-[#BEADA0] text-white font-medium rounded-md transition duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs mt-3 text-center">
            We'll never share your email with anyone else.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subsciption;
