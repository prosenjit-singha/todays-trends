import React from "react";
import { Container } from "../styles/containers";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { animated, useSpring } from "react-spring";

const Text = styled(animated.div)`
  user-select: none;
  position: relative;
  height: 100%;
  width: 100%;
  font-weight: bolder;
  color: ${colors.neutral[900]};
  font-size: 5rem;
  text-align: center;
  text-shadow: 5px 5px 5px ${colors.neutral[1000]},
    -4px -4px 5px ${colors.neutral[800]};
  @media (min-width: 791px) {
    font-size: 10rem;
  }
`;
const Loading = () => {
  const props = useSpring({
    loop: { reverse: true },
    delay: 500,
    from: {
      textShadow: `0px 0px 0px ${colors.neutral[900]},
    0px 0px 0px ${colors.neutral[900]}`,
    },
    to: {
      textShadow: `5px 5px 5px ${colors.neutral[1000]},
    -4px -4px 5px ${colors.neutral[800]}`,
    },
    config: {
      duration: 1000,
    },
    reset: true,
  });
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
      }}
    >
      <Text style={props}>Loading...</Text>
    </Container>
  );
};

export default Loading;
