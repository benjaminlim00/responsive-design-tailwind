// tailwind.config.js
module.exports = {
  theme: {},
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".px-00": {
            paddingLeft: 0,
            paddingRight: 0
          }
        },
        ["responsive"]
      );
    }
  ]
};
