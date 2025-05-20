// tailwind.config.js
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Update to match your project files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a6fe71",
        primary2: "#FF2255",
        "bg-color": "#242428",
        "bg-color-2": "#333338",
      },
      backgroundImage: {
        "bg-img": "url('../assets/background-img.jpg')",
      },
    },
  },
  plugins: [],
};
