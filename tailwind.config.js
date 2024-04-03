/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    screens: {
      'sm': { 'min': '100px', 'max': '768px' },

      'md': { 'min': '768px', 'max': '1024px' },

      'lg': { 'min': '1024px', 'max': '1280px' },

      'xl': { 'min': '1280px', 'max': '1350px' },

      '2xl': { 'min': '1536px' },
    },
    fontFamily: {
      montserrat: [
        "Poppins", "sans-serif"
      ],
    }
  },
  important: true,
  plugins: [],
}
