/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        xl: "1100px",
      },
      transitionTimingFunction: {
        "ease-in": "ease-in",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-blue": "#5515ef",
        "theme-blue-dark": "#3c01ca",
        "theme-pink": "#eb589e",
      },
      boxShadow: {
        "theme-1": "0 0 60px -15px rgba(0, 0, 0, 0.7)",
        "theme-2": "15px 0 35px -5px rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        "10xl": "10rem",
        "16xl": "16rem",
        "17xl": "17rem",
        "18xl": "18rem",
        "19xl": "19rem",
        "20xl": "20rem",
      },
      letterSpacing: {
        "more-wide": "1rem",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
      rotate: ["group-hover"],
      inset: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
