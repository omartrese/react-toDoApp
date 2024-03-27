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
    },

    extend : {
      width: {
        'task': '470px',
      }
    }
  },
  plugins: [],
}

