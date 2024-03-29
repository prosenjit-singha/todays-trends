import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  user-select: none;
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
  color: rgba(240, 240, 240, 1);
  text-decoration: none;
  user-select: none;
  width: 100%;
  height: auto;
  display: flex;
  margin-block: 0.25rem;
  align-items: center;
  border-radius: 0.3rem;
  background-image: ${(props) => props.bgColor};
  &:hover {
    color: rgba(250, 250, 250, 1);
  }
  &:hover > ${IconContainer} {
    border-radius: 0.25rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Text = styled.p`
  display: block;
  padding: 0.5rem 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
`;
