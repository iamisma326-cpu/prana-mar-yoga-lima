/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF7F2',
          100: '#F3EDE2',
          200: '#E6DBC8',
          300: '#D5C4A8',
          400: '#BFA682',
        },
        terracotta: {
          400: '#D47A57',
          500: '#C0603E',
          600: '#A44A2B',
          700: '#833920',
        },
        sage: {
          50: '#F2F5F1',
          100: '#E1E8DF',
          500: '#5C7362',
          600: '#465B4C',
          700: '#35463A',
          800: '#253229',
          900: '#18221B',
        },
        ink: {
          700: '#423D38',
          800: '#2C2825',
          900: '#1C1917',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -15px rgba(28, 25, 23, 0.08)',
        card: '0 12px 32px -8px rgba(28, 25, 23, 0.06)',
      },
    },
  },
  plugins: [],
};
