/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        // Brand-specific colors
        'brand-primary': "var(--color-primary)", /* blue-900 */
        'brand-secondary': "var(--color-secondary)", /* gray-700 */
        'brand-accent': "var(--color-accent)", /* blue-600 */
        'text-primary': "var(--color-text-primary)", /* gray-900 */
        'text-secondary': "var(--color-text-secondary)", /* gray-600 */
        'text-muted': "var(--color-text-muted)", /* gray-500 */
        'surface': "var(--color-surface)", /* gray-100 */
        'surface-hover': "var(--color-surface-hover)", /* gray-200 */
        // Glassmorphism colors
        'glass-bg': "var(--color-glass-bg)",
        'glass-border': "var(--color-glass-border)",
        // Neural network colors
        'neural-line': "var(--color-neural-line)",
        'neural-node': "var(--color-neural-node)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'glass': '16px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        headline: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      fontWeight: {
        'headline': '600',
        'body': '400',
        'cta': '600',
        'code': '400',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'micro': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'lift': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'lift-hover': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'neural': '0 0 20px rgba(49, 130, 206, 0.3)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
        'neural-glow': 'neural-glow 2s ease-in-out infinite alternate',
        'holographic-shift': 'holographic-shift 4s ease-in-out infinite',
        'kinetic-reveal': 'kinetic-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'draw-path': 'draw-path 2s ease-in-out forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        'neural-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'neural-glow': {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        },
        'holographic-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'kinetic-reveal': {
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 0 0 rgba(49, 130, 206, 0.4)',
          },
          '50%': {
            'box-shadow': '0 0 0 8px rgba(49, 130, 206, 0)',
          },
        },
        'draw-path': {
          'to': {
            'stroke-dashoffset': '0',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      backgroundImage: {
        'gradient-holographic': 'var(--gradient-holographic)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'holographic': '200% 200%',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      aspectRatio: {
        'project': '16 / 10',
        'card': '4 / 3',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}