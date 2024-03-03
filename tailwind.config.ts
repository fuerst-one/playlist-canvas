import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          hover: "var(--color-primary-hover)",
          dark: "var(--color-primary-dark)",
          text: "var(--color-primary-text)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          light: "var(--color-secondary-light)",
          hover: "var(--color-secondary-hover)",
          dark: "var(--color-secondary-dark)",
          text: "var(--color-secondary-text)",
        },
        green: {
          DEFAULT: "var(--color-green)",
          light: "var(--color-green-light)",
          hover: "var(--color-green-hover)",
          dark: "var(--color-green-dark)",
        },
        yellow: {
          DEFAULT: "var(--color-yellow)",
          light: "var(--color-yellow-light)",
          hover: "var(--color-yellow-hover)",
          dark: "var(--color-yellow-dark)",
        },
        red: {
          DEFAULT: "var(--color-red)",
          light: "var(--color-red-light)",
          hover: "var(--color-red-hover)",
          dark: "var(--color-red-dark)",
        },
        purple: {
          DEFAULT: "var(--color-purple)",
          light: "var(--color-purple-light)",
          hover: "var(--color-purple-hover)",
          dark: "var(--color-purple-dark)",
        },
        blue: {
          DEFAULT: "var(--color-blue)",
          light: "var(--color-blue-light)",
          hover: "var(--color-blue-hover)",
          dark: "var(--color-blue-dark)",
        },
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
          950: "var(--color-gray-950)",
          transparent: "var(--color-gray-transparent)",
          "transparent-light": "var(--color-gray-transparent-light)",
          "transparent-dark": "var(--color-gray-transparent-dark)",
        },
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
        "5xl": "var(--spacing-5xl)",
        "6xl": "var(--spacing-6xl)",
      },
      fontSize: {
        DEFAULT: "var(--font-size)",
        "2xs": "var(--font-size-2xs)",
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size)",
        h5: "var(--font-size-h5)",
        h4: "var(--font-size-h4)",
        h3: "var(--font-size-h3)",
        h2: "var(--font-size-h2)",
        h1: "var(--font-size-h1)",
        display: "var(--font-size-display)",
      },
      borderWidth: {
        DEFAULT: "var(--border-width)",
        sm: "var(--border-width-sm)",
        md: "var(--border-width)",
        lg: "var(--border-width-lg)",
      },
      borderColor: {
        DEFAULT: "var(--border-color)",
        light: "var(--border-color-light)",
        dark: "var(--border-color-dark)",
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",
        green: "var(--color-green)",
        "green-light": "var(--color-green-light)",
        "green-dark": "var(--color-green-dark)",
        yellow: "var(--color-yellow)",
        "yellow-light": "var(--color-yellow-light)",
        "yellow-dark": "var(--color-yellow-dark)",
        red: "var(--color-red)",
        "red-light": "var(--color-red-light)",
        "red-dark": "var(--color-red-dark)",
        purple: "var(--color-purple)",
        "purple-light": "var(--color-purple-light)",
        "purple-dark": "var(--color-purple-dark)",
        blue: "var(--color-blue)",
        "blue-light": "var(--color-blue-light)",
        "blue-dark": "var(--color-blue-dark)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius)",
        tag: "var(--border-radius-tag)",
        btn: "var(--border-radius-btn)",
        xs: "var(--border-radius-xs)",
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius)",
        lg: "var(--border-radius-lg)",
        full: "var(--border-radius-full)",
        none: "var(--border-radius-none)",
      },
      boxShadow: {
        DEFAULT: "var(--box-shadow)",
        sm: "var(--box-shadow-sm)",
        md: "var(--box-shadow)",
        lg: "var(--box-shadow-lg)",
        header: "0 0.5rem 1.5rem 0 rgb(0 0 0 / 30%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
export default config;