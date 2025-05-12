import React from "react";

const Footer = () => {
  const customizeLinks =
    "rounded-md font-bold text-gray-600 hover:text-btn-login p-2 hover:border hover:border-btn-login transition-colors";
  return (
    <footer className="flex bg-white gap-4 justify-center items-center h-24 flex-wrap">
      <div className={customizeLinks}>C2025</div>
      <div className={customizeLinks}>YourCoffeeShop</div>
      <div className={customizeLinks}>Terms</div>
      <div className={customizeLinks}>Privacy Terms</div>
    </footer>
  );
};

export default Footer;
