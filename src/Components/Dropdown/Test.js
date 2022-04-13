import React from "react";
import { useEffect, useState } from "react";
import { animated, useTransition, config } from "react-spring";

export default function Test() {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 200,
    delay: 200,
    config: config.molasses,
    onRest: () => setItems([]),
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems([1, 2, 3, 4]);
      }, 2000);
    }
  }, [items]);

  return (
    <div style={{ display: "flex" }}>
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            opacity,
          }}
        >
          {item}
        </animated.div>
      ))}
    </div>
  );
}
