/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        standartRadius: "30px",
      },
      colors: {
        standartColor: "#FF9500",
        standartColorHover: "#FFAC38",
        invertedStandartColor: "#fff",
        invertedStandartColorHover: "#eee",
        containerColor: "#F8F8F8",
        standartBlack: "#1a1a1a",
        cardColor: "#fefefe",
        errorColor: "#EB4C42"
      },
    },
  },
  plugins: [],
};
