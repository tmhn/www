// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    colors: {
      "paper": "#FCF8F2"
    },
    fontFamily: {
      "display": ["BerlingskeSerif-Bold"],
      "copy": ["Campton-Light"]
    },
    borderColor: {
      "break": "#CECECE"
    },
    textColor: {
      "subHeading": "#666666",
      "copy": "#575757",
      "red": "#FF5A52",
      "bet": "#153F8E"
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
