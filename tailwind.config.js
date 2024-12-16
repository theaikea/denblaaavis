/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      'blue-blue-100': '#e0eefa',
      'blue-blue-200': '#3269c8',
      'blue-blue-300': '#000a8c',
      'grey-grey-100': '#ffffff',
      'grey-grey-200': '#f2f2f2',
      'grey-grey-300': '#808080',
      'grey-grey-400': '#000000',
      'red-red-100': '#f88d8d',
      'red-red-200': '#ff4d58',
    },
    radius: {
      'border-radius-none': 'var(--space-space-0)',
      'border-radius-sm': 'var(--space-space-0-5)',
      'border-radius-md': 'var(--space-space-1)',
      'border-radius-lg': 'var(--space-space-1-5)',
      'border-radius-xl': 'var(--space-space-2)',
      'border-radius-2xl': 'var(--space-space-2-5)',
      'border-radius-3xl': 'var(--space-space-3)',
      'border-radius-full': 'var(--space-space-full)',
      'border-width-0': '0rem',
      'border-width-2': '0.125rem',
      'border-width-4': '0.25rem',
      'border-width-8': '0.5rem',
    },
  },
  plugins: [],
}