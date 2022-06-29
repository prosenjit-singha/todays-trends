import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Container = styled.div`
  position: absolute;
  height: 44px;
  width: 44px;
  right: 2%;
  //outline: 1px solid red;
`;

const SVG = styled.svg`
  height: 44px;
  width: 44px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  //background-color: white;
  overflow: visible;
`;

const Circle = styled(animated.circle)`
  fill: transparent;
  stroke: ${(props) => props.color};
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
`;

const Percentage = styled(animated.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  font-weight: bold;
  user-select: none;
`;

const Progress = ({ value }) => {
  const styles = useSpring({
    //loop: true,
    delay: 500,
    from: {
      strokeDashoffset: 100,
      percent: 0,
    },
    to: {
      strokeDashoffset: 100 - value,
      percent: value,
    },

    config: {
      ...config.stif,
      duration: 2000,
    },
  });

  return (
    <Container>
      <SVG>
        <Circle cx="22" cy="22" r="15" color="hsla(250, 80%, 70%, 0.5)" />
        <Circle
          cx="22"
          cy="22"
          r="15"
          style={styles}
          color="hsla(250, 80%, 70%, 1)"
        />
      </SVG>
      <Percentage>{styles.percent.to((num) => num.toFixed(0))}</Percentage>
    </Container>
  );
};

export default Progress;
