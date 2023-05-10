/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}",];
export const theme = {
  extend: {
    backgroundImage: {
      "inputbg": "url('/src/assets/images/bg-shorten-desktop.svg)"
    },
    fontFamily: {
      poppinsmedium: ["poppinsmedium"],
      poppinsbold: ["poppinsbold"]
    },
  },
};
export const plugins = [];

