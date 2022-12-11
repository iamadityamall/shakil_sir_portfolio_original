module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        flow: "flow 10s linear infinite",
        paused: "paused",
      },

      keyframes: {
        flow: {
          "0%": { left: 0 },
          "100%": { left: -957 },
        },
      },
    },
  },
  plugins: [],
};
