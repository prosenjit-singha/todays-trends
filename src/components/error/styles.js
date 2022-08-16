import styled from "styled-components";
import { Container as CNTR, Section as SCN } from "../../styles/containers";

export const Container = styled(CNTR)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled(SCN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Code = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.error.default};
  font-weight: bolder;
  text-align: center;
  margin-bottom: 0.75rem;
`;
export const Error = styled.h1`
  color: ${(props) => props.theme.text.primary};
  font-family: Nexa;
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`;

export const ErrorContainer = styled.div`
  padding: 1rem;
  border-radius: 2rem;
  background: hsla(0, 69%, 67%, 0.1);
  border: 2px solid hsla(0, 69%, 67%, 0.1);
`;

export const Text = styled.p`
  color: ${(props) => props.theme.text.secondary};
  margin-top: 2rem;
  font-size: 1.8rem;
  text-align: center;
`;
