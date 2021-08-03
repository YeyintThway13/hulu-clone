module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      screens: {
        "4xl": "3000px",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
