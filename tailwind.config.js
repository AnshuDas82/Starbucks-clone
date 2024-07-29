/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: 
    {
      colors:{
          green:"#006241"
      }
    },
  },
  plugins: [
    function ({addUtilities}) 
    {
      const newUtilities={
        
          ".no-scrollbar::-webkit-scrollbar":{
            display:"none",
          },
          ".no-scrollbar": {
            "-ms-overflow-style":"none",
            "scrollbar-width":"none",
          },

      };
      addUtilities(newUtilities);
    }
  ],
}