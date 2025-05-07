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
