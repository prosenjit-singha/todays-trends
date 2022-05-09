import { colors } from "./variables";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const smDevice = "791px";

export const GlobalStyle = createGlobalStyle`
 
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
    body{
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.background};
        //${colors.neutral[900]};
    }
`;

export const NavBarSpace = styled.div`
  padding-bottom: 56px;
`;
export const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 95vh;
  padding: 1.8rem;
`;
