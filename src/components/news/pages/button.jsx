import React, { useEffect } from "react";
import { Button } from "../../../styles/button";

const BTN = ({
  isactive,
  fontSize = 1,
  borderRadius = 0.25,
  children,
  disabled = false,
  width,
  margin,
  handleClick,
  styles,
}) => {
  useEffect(() => {}, []);
  return (
    <Button
      style={styles}
      isactive={isactive ? "true" : "false"}
      border_radius={borderRadius}
      width={width}
      text={children}
      fontSize={fontSize}
      disabled={disabled}
      onClick={() => handleClick(children)}
      margin={margin}
    >
      {children}
    </Button>
  );
};

export default BTN;
