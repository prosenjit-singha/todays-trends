import styled from "styled-components";
import { purple } from "../../utils/colors";
import { margin } from "../../styles/global-constants";

export const Container = styled.section`
  background-color: ${(props) => props.theme.forground};
  backdrop-filter: blur(15px);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: ${margin};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.h1`
  display: inline-block;
  font-family: Inter;
  font-size: 1.8rem;
  padding-block: 0.5em;
  text-transform: capitalize;
`;
export const Text = styled.p`
  font-size: 1.3rem;
  padding-bottom: 1em;
  color: ${(props) => props.theme.secondaryText};
`;
export const TextBox = styled.input`
  width: 50%;
  height: 3rem;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.forground};

  font-size: 1.3rem;
  padding: 0.25em 0.5em;
  margin-bottom: 0.8rem;
  text-align: center;
  outline: none;
  transition: width 200ms ease-out;
  &:focus {
    border: 2px solid ${(props) => props.theme.secondaryAccent};
    width: 60%;
  }
`;
export const Button = styled.button`
  font-size: 1.5rem;
  text-transform: capitalize;
  padding: 0.3em 0.6em;
  margin: 1rem;
  color: white;
  background-color: ${purple[400]};
  border: 1px solid ${purple[500]};
  border-radius: 5px;
  cursor: pointer;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.accent};
`;
