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
        'desktop' : "url(/public/pattern-background-desktop.svg)",
        'mobile' : "url(/public/pattern-background-mobile.svg)"
      }
    },
    colors: {
      pale_blue : 'hsl(225, 100%, 94%)',
      bright_blue : 'hsl(245, 75%, 52%)',
      very_pale_blue : 'hsl(225, 100%, 98%)',
      desaturated_blue : 'hsl(224, 23%, 55%)',
      dark_blue : 'hsl(223, 47%, 23%)',
      white: 'hsl(0, 0%, 100%)'
    },
  },
  plugins: [],
}
