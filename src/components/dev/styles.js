import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  //height: 400px;
  padding: 25px;
  background-color: ${(props) => props.theme.forground};
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 1px solid ${(props) => props.theme.forgroundShadow};
  overflow: hidden;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;
export const Image = styled.img`
  position: relative;
  border-radius: 50%;
  border: 0px solid red;
  margin: 5px;
  transition: border 100ms ease-in-out, margin 100ms ease-in-out;
  &:hover {
    border: 5px solid red;
    margin: 0px;
  }
`;

export const SocialsWrapper = styled.div`
  height: auto;
  width: auto;
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Icon = styled.a`
  display: flex;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  &:hover {
    border: 2px solid red;
  }
`;
export const Name = styled.h2`
  padding-top: 5px;
`;
export const Intro = styled.div``;
export const IconContainer = styled.div``;
