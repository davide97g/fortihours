import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#000",
            foreground: "#ffffff",
            primary: {
              50: "#DBEF74ff",
              100: "#C6EB82ff",
              200: "#9BE49Dff",
              300: "#85E1ABff",
              400: "#70DDB8ff",
              500: "#5ADAC6ff",
              600: "#45D6D4ff",
              700: "#2FD3E1ff",
              800: "#1ACFEFff",
              900: "#1ACFEFff",
              DEFAULT: "#5ADAC6ff",
              foreground: "#000",
            },
            focus: "#1ACFEFff",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
