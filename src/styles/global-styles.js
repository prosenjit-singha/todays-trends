import { createGlobalStyle } from "styled-components";
import dark from "../img/dark.jpg";
import light from "../img/light.jpg";
import { red } from "../utils/colors";
//fonts
import JosefinSans from "../fonts/josefin-sans.ttf";
import StaatlichesRegular from "../fonts/staatliches-regular.ttf";
import Roboto from "../fonts/roboto/roboto-regular.ttf";
import Anton from "../fonts/anton-regular.ttf";
import Poppins from "../fonts/poppins-regular.ttf";
import Inter from "../fonts/inter.ttf";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: Staatliches;
        src: url(${StaatlichesRegular}) format('truetype');
    }
    @font-face {
        font-family: JosefinSans;
        src: url(${JosefinSans}) format('truetype');
    }
    @font-face {
        font-family: Roboto;
        src: url(${Roboto}) format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: Anton;
        src: url(${Anton}) format('truetype');
    }

    @font-face {
        font-family: Poppins;
        src: url(${Poppins}) format('truetype');
    }

    @font-face {
        font-family: Inter;
        src: url(${Inter}) format('truetype');
    }

    *{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-track{
        margin-block: -0.35em;
        background-color: ${(props) => props.theme.backgroundShadow};
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb{
        margin: 2px;
        background-color: ${red[400]};
        border-radius: 5px;
        &:hover{
        background-color: ${(props) => props.theme.forgroundHighlight};
        }
    }
    &::-webkit-scrollbar-corner{
        background-color: transparent;
    }
    }
    h1,h2, h3, h4, h5, h6{
        font-family: Inter;
    }
    html {
        font-family: Poppins;
        font-size: 1em;
        scroll-behavior: smooth;
    }
    body{
        position:relative;
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.background};
        /* background-image: url(${(props) =>
          props.theme.name === "dark" ? dark : light});
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed; */
        overflow: auto;
    }
    button {
        font-family: Inter;
    }
    @keyframes ripple {
        100% {
            transform: translate(-50%, -50%) scale(100);
            opacity: 0;
        }
    }
`;

export default GlobalStyle;
