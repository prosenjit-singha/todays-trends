import { createGlobalStyle } from "styled-components";
import dark from "../img/dark.jpg";
import light from "../img/light.jpg";
//fonts
import JosefinSans from "../fonts/josefin-sans.ttf";
import StaatlichesRegular from "../fonts/staatliches-regular.ttf";
import Roboto from "../fonts/roboto/roboto-regular.ttf";
import Anton from "../fonts/anton-regular.ttf";

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
        src: url(${Anton}) format('turetype');
    }


    *{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track{
        margin-block: -0.35em;
        background-color: ${(props) => props.theme.backgroundShadow};
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb{
        margin: 2px;
        background-color: ${(props) => props.theme.forgroundShadow};
        border-radius: 5px;
        &:hover{
        background-color: ${(props) => props.theme.forgroundHighlight};
        }
    }
    &::-webkit-scrollbar-corner{
        background-color: transparent;
    }
    }
    html {
        font-family: Roboto;
        font-size: 1em;
        scroll-behavior: smooth;
    }
    body{
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.background};
        background-image: url(${(props) =>
          props.theme.name === "dark" ? dark : light});
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        overflow: auto;
    }
    @keyframes ripple {
        100% {
            transform: translate(-50%, -50%) scale(100);
            opacity: 0;
        }
    }
`;

export default GlobalStyle;
