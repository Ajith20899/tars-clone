/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'td': {'max': '360px'},
      // => @media (max-width: 340px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary) / <alpha-value>)",
        textPrimary: "hsl(var(--textPrimary) / <alpha-value>)",
        textSecondary: "hsl(var(--textSecondary) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        backgroundShade: "hsl(var(--backgroundShade) / <alpha-value>)",
        borderColor: "hsl(var(--border) / <alpha-value>)",
        lightBorder: "hsl(var(--lightBorder) / <alpha-value>)",

        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "placeholderShimmer": {
          from: { backgroundPosition: "-1200px 0" },
          to: { backgroundPosition: "1200px 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "placeholderShimmer": "placeholderShimmer 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
