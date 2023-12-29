/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
        
      },

      
      backgroundImage: {
        'logo': "url('logo.png')",
      },
    
      boxShadow: {
      '3xl':'0 20px 50px rgba(8, 112, 184, 0.7)',
      '4xl':'4.0px 8.0px 8.0px rgba(0,0,0,0.38)'
      }
    }
  },
  plugins: [],
}