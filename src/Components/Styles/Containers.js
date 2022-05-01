import { colors } from "./Variables";
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
      background-color: ${(props) => props.theme.background};
      border-radius: 10px;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.3),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.1),
    inset 4px 4px 5px 0px rgba(0, 0, 0, 0.3),
    inset -4px -4px 5px 0px rgba(255, 255, 255, 0.1);
    }
    &::-webkit-scrollbar-thumb{
      margin: 2px;
      background-color: ${(props) => props.theme.forground};
      border-radius: 5px;
      box-shadow: inset 4px 4px 3px 0px rgba(255, 255, 255, 0.1),
      inset -4px -4px 3px 0px  rgba(0, 0, 0, 0.3);
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
  padding: 1.5rem;
`;
