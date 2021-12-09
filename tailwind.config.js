module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        current: "inherit",
      },
      height: {
        header: "var(--header-height)",
        headerShrink: "var(--header-height-shrink)",
      },
      boxShadow: {
        smooth: "var(--shadow-smooth)",
      },
      colors: {
        inherit: "inherit",
        "primary-text": "var(--dark-primary)",
        "secondary-text": "var(--dark-secondary)",
        "white-eee": "var(--white-eee)",
        deepPink: "var(--deepPink)",
        "dark-gray-light": "var(--dark-gray-light)",
        "dark-gray-black": "var(--dark-gray-black)",
        "c-orange": "var(--orange)",
        "c-gray": "var(--background-gray)",
        "c-red": "var(--red)",
      },
      spacing: {
        primary: "var(--padding-primary)",
        15: "3.75rem",
      },
      gap: {
        7.5: "30px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.8rem",
      },
    },
    screens: {
      sm: "500px",
      smx: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1320px",
    },
  },
  variants: {
    extend: {
      transform: ["group-hover"],
      margin: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
