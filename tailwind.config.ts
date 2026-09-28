import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        navy: '#0c1b2e',
        blue: '#1769ff',
        mist: '#f4f7fb',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'var(--font-bengali)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
