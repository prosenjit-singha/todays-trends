import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 10rem;
  top: 8%;
  height: 10rem;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: top 300ms ease, border-radius 300ms ease;
`;

export const SocialsWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  gap: 0.5rem;
`;
export const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) =>
    props.theme.darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
  transition: border-radius 300ms ease;
  &:hover {
    border-radius: 0.15rem;
  }
`;
export const Name = styled.h4`
  padding-top: 5px;
  text-align: center;
`;
export const Intro = styled.p`
  text-transform: capitalize;
  text-align: center;
`;
export const IconContainer = styled.div``;

export const Content = styled.div`
  position: absolute;
  bottom: 8%;
  width: 100%;
  padding-inline: 1rem;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: bottom 300ms ease, height 300ms ease, box-shadow 300ms ease;
  overflow: hidden;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 276px;
  padding: 25px;
  background-color: ${(props) => props.theme.background.paper};
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 1px solid ${(props) => props.theme.background.primary};
  border-radius: 0.25rem;
  &:hover ${ImageContainer} {
    position: absolute;
    top: -20%;
    border-radius: 0.15rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  }
  &:hover ${Content} {
    height: 175px;
    bottom: -10%;
  }
`;
