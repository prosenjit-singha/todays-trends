import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(50%);
  transform: scale(1.1);
  transition: transform 300ms ease;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  letter-spacing: 1px;
  text-transform: capitalize;
`;

export const IconContainer = styled.div`
  padding: 0.3rem;
  border-radius: 100%;
  font-size: 1.25rem;
  background-color: rgba(255, 255, 255, 0.3);
  transition: transform 300ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  transition: border-radius 300ms ease;
`;
export const Item = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  &:hover ${IconContainer} {
    border-radius: 0.23rem;
  }
  &:hover > ${Image} {
    transform: translateX(5%) scale(1.1);
  }
`;
