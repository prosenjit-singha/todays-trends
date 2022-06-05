import { neutral, blue, cyan, lightGreen, red, yellow } from "../utils/colors";

export const dark = {
  name: "dark",
  text: neutral[100],
  link: neutral[200],
  backgroundHighlight: neutral[900],
  background: neutral[1000],
  backgroundShadow: neutral[1100],
  forgroundHighlight: neutral[700],
  forground: neutral[800],
  forgroundShadow: neutral[900],
  primary: blue[400],
  secondery: neutral[500],
  success: lightGreen[800],
  danger: red[500],
  warning: yellow[400],
  info: cyan[400],
};

export const light = {
  name: "light",
  text: neutral[1100],
  link: neutral[1000],
  backgroundHighlight: "rgba(255,255,255,1)",
  background: "#D5D5D5",
  backgroundShadow: "rgba(0,0,0,0.3)",
  forgroundHighlight: "#FFFFFF",
  forground: "#F1F1F1",
  forgroundShadow: "#E3E3E3",
  primary: blue[400],
  secondery: neutral[500],
  success: lightGreen[800],
  danger: red[500],
  warning: yellow[400],
  info: cyan[400],
};
