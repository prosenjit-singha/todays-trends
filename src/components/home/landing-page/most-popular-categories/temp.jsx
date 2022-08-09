import React, { useState, useCallback, CSSProperties, useEffect } from "react";
import { Container } from "../../styles/containers";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

import styles from "./styles.module.css";

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      C
    </animated.div>
  ),
];

export default function About() {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 1, transform: "translate3d(-100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(100%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index]);
  return (
    <Container>
      <div className={`flex fill ${styles.container}`} onClick={onClick}>
        {transitions((style, i) => {
          return (
            <animated.div style={{ ...style, background: "lightpink" }}>
              A
            </animated.div>
          );
        })}
      </div>
    </Container>
  );
}
