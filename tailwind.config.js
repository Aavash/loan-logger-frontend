module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('/loan_background.jpg')"
      }) 
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
