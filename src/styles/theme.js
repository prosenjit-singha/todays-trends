import { cyan, lightGreen, neutral } from "../utils/colors";

//colors from material ui
import {
  red,
  blue,
  purple,
  orange,
  lightBlue,
  green,
} from "@mui/material/colors";

export const dark = {
  accent: red[400],
  activeLink: neutral[300],
  backgroundHighlight: neutral[900],
  background: {
    primary: "	hsl(0, 0%, 7%)",
    paper: "	hsl(0, 0%, 10%)",
  },
  backgroundShadow: neutral[1100],
  danger: red[500],
  darkMode: true,
  divider: "rgba(255, 255, 255, 0.12)",
  error: {
    default: red[700],
    main: red[500],
    light: red[300],
    dark: red[700],
  },
  forgroundHighlight: neutral[700],
  //forground: neutral[800],
  forgroundShadow: neutral[900],
  forground: "hsla(230, 10%, 20%, 0.5)",
  info: {
    default: lightBlue[700],
    main: lightBlue[400],
    light: lightBlue[300],
    dark: lightBlue[700],
  },
  inactiveLink: neutral[500],
  link: neutral[200],
  name: "dark",
  primary: {
    default: blue[400],
    main: blue[200],
    light: blue[50],
    dark: blue[400],
  },
  secondaryAccent: blue[500],
  secondary: {
    default: purple[400],
    main: purple[200],
    light: purple[50],
    dark: purple[400],
  },
  success: {
    default: green[700],
    main: green[400],
    light: green[300],
    dark: green[700],
  },
  text: {
    primary: "#fff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
  },
  secondaryText: neutral[300],
  warning: {
    default: orange[700],
    main: orange[400],
    light: orange[300],
    dark: orange[700],
  },
};

export const light = {
  accent: red[400],
  activeLink: neutral[1100],
  backgroundHighlight: "rgba(255,255,255,1)",
  background: {
    primary: "hsl(0, 0%, 98%)",
    paper: "hsl(0, 0%, 95%)",
  },
  backgroundShadow: "rgba(0,0,0,0.3)",
  danger: red[500],
  darkMode: false,
  divider: "rgba(0, 0, 0, 0.12)",
  error: {
    default: red[300],
    main: red[500],
    light: red[300],
    dark: red[700],
  },
  forgroundHighlight: "#FFFFFF",
  //forground: "#F1F1F1",
  forground: "hsla(230, 10%, 90%, 0.5)",
  forgroundShadow: "#E3E3E3",
  info: {
    default: lightBlue[300],
    main: lightBlue[400],
    light: lightBlue[300],
    dark: lightBlue[700],
  },
  inactiveLink: neutral[1000],
  link: neutral[1000],
  link: neutral[1000],
  name: "light",
  primary: {
    default: blue[50],
    main: blue[200],
    light: blue[50],
    dark: blue[400],
  },
  secondaryAccent: blue[500],
  secondary: {
    default: purple[50],
    main: purple[200],
    light: purple[50],
    dark: purple[400],
  },
  success: {
    default: green[300],
    main: green[400],
    light: green[300],
    dark: green[700],
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  secondaryText: neutral[900],
  warning: {
    default: orange[300],
    main: orange[400],
    light: orange[300],
    dark: orange[700],
  },
};
