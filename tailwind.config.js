/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-border":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.22) 0%, rgba(1, 235, 99, 0.04) 100%)",
      },
    },
  },
  plugins: [],
};
