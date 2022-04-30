import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { boxShadow } from "../../Utiles/functions";

const convertInRem = (value) => {
  return `${value}rem`;
};
const getPadding = (fontSize = 1) => {
  return `${(fontSize * 20) / 100}rem ${(fontSize * 40) / 100}rem`;
};
const Container = styled.button`
  position: relative;
  width: ${(props) =>
    props.width ? convertInRem(props.width) : "fit-content"};
  height: fit-content;
  overflow: hidden;
  margin: 0.5rem;
  background-color: transparent;
  border: none;
  border-radius: ${(props) => convertInRem(props.borderRadius)};
  display: flex;
  justify-content: center;
  align-items: center;
  //overflow: hidden;
`;
const Text = styled.div`
  border-radius: inherit;
  pointer-events: none;
  padding: ${(props) => getPadding(props.fontSize)};
  user-select: none;
  font-size: ${(props) => convertInRem(props.fontSize)};
  font-weight: 500;
  letter-spacing: 1px;
  width: 100%;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.forground};
`;
const HoverContainer = styled(animated.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  //border: inherit;
  overflow: hidden;
`;
const Hover = styled(animated(Text))`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: ${(props) => convertInRem(props.fontSize)};
  color: ${(props) => props.theme.info};
  background: ${(props) => props.theme.success};
  overflow: hidden;
`;

const Button = ({ fontSize = 1, borderRadius = 0.5, children, width }) => {
  const [info, setInfo] = useState({});
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);
  const txtRef = useRef();
  const text = "CLICK";
  const getInfo = () => {
    const temp = txtRef.current.getBoundingClientRect();
    setInfo(temp);
  };

  const hoverStyle = useSpring({
    height: hover ? info.height : 0,
    borderRadius: hover ? "0% 0% 0% 0%" : "50% 50% 0% 0%",
  });
  useEffect(() => {}, []);
  return (
    <Container
      borderRadius={borderRadius}
      width={width}
      style={{
        boxShadow: clicked ? boxShadow.glow("yellow") : boxShadow.default(),
      }}
      onMouseEnter={() => {
        setHover(true);
        getInfo();
      }}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      <Text ref={txtRef} fontSize={fontSize}>
        {children}
      </Text>
      <HoverContainer style={hoverStyle}>
        <Hover fontSize={fontSize}>{children}</Hover>
      </HoverContainer>
    </Container>
  );
};

export default Button;
