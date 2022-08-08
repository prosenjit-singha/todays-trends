import styled from "styled-components";
import { device } from "../../../../utils/device";
import { margin } from "../../../../styles/global-constants";
import { blueG } from "../../../../utils/gradient-colors";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media ${device.tabletM} {
    flex-direction: row;
  }
`;
export const Body = styled.div`
  width: 100%;
  /* background-color: blue; */
  padding: ${margin};
  @media ${device.tablet} {
    width: 65%;
  }
  @media ${device.laptop} {
    width: 75%;
  }
`;
export const Side = styled.div`
  width: 100%;
  padding: 1.5rem;
  @media ${device.tablet} {
    width: auto;
    width: 35%;
  }
  @media ${device.laptop} {
    width: 25%;
  }
`;

export const SideContent = styled.div`
  position: sticky;
  top: 2rem;
  padding-top: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const HeaderImage = styled.div`
  position: relative;
  border-radius: 0.25rem;
  overflow: hidden;
  height: 10rem;
  margin-bottom: 0.5rem;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: ${blueG};
    opacity: 0.25;
    z-index: 1;
  }
  &::before {
    position: absolute;
    content: attr(data-text);
    text-transform: uppercase;
    top: 50%;
    left: 50%;
    font-family: Nexa;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    width: fit-content;
    height: fit-content;
    padding: 0rem 0.5rem;
    padding-top: 0.25rem;
    background-color: hsla(0, 50%, 50%, 0.3);
    border-radius: 0.2rem;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
`;
export const Title = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    text-decoration: underline;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  color: hsla(0, 0%, 50%, 0.5);
  margin-bottom: 0.5rem;
  justify-content: space-between;
`;

export const Writter = styled.h6`
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 1.5rem;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const Icon = styled.div`
  display: flex;
  margin-right: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const Date = styled.h6`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0;
`;
export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const News = styled.div`
  padding: 1rem 0;
  &:is(:first-child) {
    padding-top: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 50%, 0.25);
  }
`;

export const Item = styled.div`
  &:hover ${Image} {
    transform: scale(1.05);
  }
`;
