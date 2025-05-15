/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        text: "var(--text-color)",
        primary: "#0C1C3C",
        primary2: "#DA6219",
        primary3: "#F4C04A",
      },
      margin: {
        80: "80px",
        100: "100px",
      },
      padding: {
        50: "50px",
        80: "80px",
        100: "100px",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        "hero-bg": "url('./assets/images/home.jpg')",
        "omra-bg": "url('./assets/images/omra-offer.jpg')",
      },
    },
  },
  plugins: [],
};
