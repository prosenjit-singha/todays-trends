import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const IconContainer = styled.div`
  /* width: 50px;
  height: 50px; */
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  transition: background-color 300ms ease, border-radius 300ms ease;
`;
export const Item = styled.a`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  user-select: none;
  width: 100%;
  height: auto;
  display: flex;
  margin-block: 0.25rem;
  align-items: center;
  border-radius: 0.3rem;
  background-image: ${(props) => props.bgColor};
  &:hover > ${IconContainer} {
    border-radius: 0.25rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Text = styled.div`
  padding: 0.5rem 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding-block: 1rem;
  display: flex;
  align-items: center;
`;
export const DoubleLine = styled.div`
  width: 100%;
  height: 0.5rem;
  border-block: 2px solid gray; //dont forget to adjust the color
`;
export const Title = styled.h1`
  margin-right: 0.5rem;
  min-width: fit-content;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;
