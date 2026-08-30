/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#082B57',
          primary: '#082B57',
          dark: '#041B38',
          deep: '#031226',
          surface: '#0B356B',
          light: '#0E448A',
        },
        gold: {
          DEFAULT: '#D49A16',
          primary: '#D49A16',
          light: '#E7B83E',
          dark: '#B27F0C',
          hover: '#C18B11',
          muted: '#F8EDD3',
        },
        offwhite: {
          DEFAULT: '#F7F8FA',
          50: '#FFFFFF',
          100: '#F7F8FA',
          200: '#EEF0F4',
          300: '#E4E7EC',
        },
        charcoal: {
          DEFAULT: '#17202A',
          800: '#17202A',
          900: '#0F161E',
        },
        slate: {
          DEFAULT: '#667085',
          body: '#667085',
          muted: '#98A2B3',
        },
        border: {
          DEFAULT: '#E4E7EC',
          light: '#F2F4F7',
          dark: '#D0D5DD',
          navy: '#1A3F70',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(8, 43, 87, 0.08), 0 2px 6px -1px rgba(8, 43, 87, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(8, 43, 87, 0.14), 0 4px 12px -2px rgba(8, 43, 87, 0.08)',
        'gold-glow': '0 0 25px rgba(212, 154, 22, 0.35)',
        'navy-glow': '0 0 30px rgba(8, 43, 87, 0.45)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
