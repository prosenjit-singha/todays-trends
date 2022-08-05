import styled from "styled-components";
import { blueG } from "../../../../../utils/gradient-colors";

export const Container = styled.div`
  width: 100%;
  border-radius: 0.25rem;
`;
export const ImageContainer = styled.div`
  height: 5rem;
  width: 5rem;
  overflow: hidden;
  border-radius: 50%;
  background: linear-gradient(#fff, #fff) padding-box, ${blueG} border-box;
  border: 3px solid transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 300ms ease;
`;
export const Content = styled.div`
  padding-left: 1rem;
  margin-left: 1rem;
  border-left: 1px solid hsla(0, 0%, 50%, 0.25);
`;
export const Label = styled.label`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.secondaryText};
`;
export const Title = styled.h4`
  text-transform: capitalize;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-block: 0.5rem;
  text-overflow: ellipsis;
  cursor: pointer;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
`;
export const Date = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  color: ${(props) => props.theme.secondaryText};
`;
export const Item = styled.div`
  padding-block: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  &:hover ${Image} {
    transform: scale(1.075);
  }
  &:hover ${Title} {
    text-decoration: underline;
  }
  &:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 50%, 0.25);
  }
`;
