module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xxxl: ["32px", "48px"],
      md: ["16px", "24px"],
      sm: ["12px", "18x"],
    },
    screens: {
      md: "550px",
      sm: "350px",
    },

    extend: {
      colors: {
        primary: "#F9FAFB",
        border: "#242424",
        searchButton: "#50B83C",
      },
      borderRadius: {
        xxxl: "32px",
      },
      transitionProperty: {
        height: "height",
      },
      dropShadow: {
        box: "box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
