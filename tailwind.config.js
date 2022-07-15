/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dashboardColorKit: "#363740",
        fontColor: "#A4A6B3",
        anjay: "#F7F8FC",
        colorHeaders: "#252733",
        dashboardColor: "#9FA2B4",
        priceColor: "#252733",
      },
      padding: {
        4.5: "1.25rem",
      },
      fontFamily: {
        Mulish: "Mulish",
      },
      borderColor: {
        aenjay: "#DFE0EB",
      },
      width: {
        128: "85.5%",
        999: "95%",
      },
      margin: {
        9: "2rem",
        10.5: "2.5rem",
        2.75: "0.6rem",
      },
    },
  },
  plugins: [],
};
