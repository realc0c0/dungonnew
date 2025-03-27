/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'telegram-bg': 'var(--tg-theme-bg-color, #1c1c1e)',
        'telegram-text': 'var(--tg-theme-text-color, #ffffff)',
        'telegram-hint': 'var(--tg-theme-hint-color, #98989e)',
        'telegram-link': 'var(--tg-theme-link-color, #3390ec)',
        'telegram-button': 'var(--tg-theme-button-color, #3390ec)',
        'telegram-button-text': 'var(--tg-theme-button-text-color, #ffffff)',
      },
    },
  },
  plugins: [],
};