import styled, { keyframes } from "styled-components";
import { device } from "../../../../utils/device";
import { red, blue } from "../../../../utils/colors";

const zoom = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.95) translate(5%, 5%);
  }
`;
export const Container = styled.div`
  width: 100%;
  min-height: 20rem;
  padding: 1.8rem;
  background-color: hsla(0, 0%, 50%, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  @media ${device.tablet} {
    width: 50%;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${zoom} 2s infinite alternate;
`;
export const Content = styled.div`
  margin-top: 1rem;
  @media ${device.laptop} {
    padding-left: var(--lg-inline-padding);
  }
`;
export const Title = styled.h1`
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;
export const Form = styled.form`
  margin-top: 1rem;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: row;
  gap: 0.5rem;
  @media ${device.laptop} {
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr;
    grid-auto-flow: column;
    gap: 1rem;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  cursor: text;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 0.2rem;
  background-color: hsla(0, 0%, 50%, 0.15);
  &:focus {
    background-color: ${(props) =>
      props.theme.isDark ? "hsla(0, 0%, 50%, 0.2)" : "hsla(0, 0%, 0%, 0.2)"};
    outline: 3px solid hsla(250, 70%, 60%, 0.4);
    outline-offset: 3px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  border: none;
  padding: none;
  background-image: linear-gradient(135deg, ${blue[600]}, ${blue[400]});
  text-transform: uppercase;
`;
