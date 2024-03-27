/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors: {
      'contrast': '#333333',
      'complement': '#5a606b',
      'green-600':  'rgb(101 163 13)',
      'red-600': 'rgb(220 38 38)',
    }, 
  },
  plugins: [],
}

