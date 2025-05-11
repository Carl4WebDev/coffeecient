const plugin = require("tailwindcss");
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

module.exports = {
  content: ["./src/**/*.{html,js}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      colors: {
        "bg-navbar": "#EFE1D6",
        "btn-login": "#A47149",
        "btn-login-shadow": "#C69C6D",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      customizeLinks: {
        "customize-links":
          "rounded-md font-bold text-gray-600 hover:text-btn-login p-2 hover:border hover:border-btn-login transition-colors",
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
      backgroundColor: ["hover"],
      opacity: ["hover"],
      ring: ["hover"],
    },
  },
  plugins: [flowbiteReact],
};
