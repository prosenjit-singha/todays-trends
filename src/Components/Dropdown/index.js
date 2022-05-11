import React, { useState, useRef } from "react";
import {
  animated,
  useSpring,
  useTransition,
  useChain,
  config,
  useSpringRef,
} from "react-spring";
import { IoIosArrowDown as Icon } from "react-icons/io";
import { useMeasure } from "../../utils/helpers";
import {
  Container,
  SelectWrapper,
  Select,
  OptionContainer,
  Options,
  Option,
  Radio,
  Label,
} from "./styles";
import { useRippleEffect } from "../ripple-effect";

const Dropdown = ({ background, data, handleData, reset }) => {
  let list;
  if (data !== undefined) list = Object.keys(data.list);
  const rippleRef = useRippleEffect();
  //const [selected, setSelected] = useState(`All`);
  const [isOpen, setOpen] = useState(false);
  const [wrapperRef, { height: wrapperHeight }] = useMeasure();
  const selectedRef = useRef();
  //functions
  const handleClick = (e) => {
    setOpen(!isOpen);
    //setSelected(e.target.value);
    handleData({ ...data, selected: e.target.value });
    reset();
  };
  //animations
  const arrowStyle = useSpring({
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    config: config.wobbly,
  });
  const springApi = useSpringRef();
  const wrapperStyle = useSpring({
    ref: springApi,
    maxHeight: isOpen ? wrapperHeight : 0,
  });
  const transApi = useSpringRef();
  const items = useTransition(isOpen ? list : [], {
    ref: transApi,
    trail: 50,
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });
  useChain(isOpen ? [springApi, transApi] : [transApi, springApi], [
    0,
    isOpen ? 0.1 : 0.2,
  ]);
  return (
    <>
      <Container>
        {/* <Title>{data.id}</Title> */}
        <SelectWrapper
          ref={rippleRef}
          type="button"
          onClick={() => setOpen(!isOpen)}
          bg={background}
        >
          <Select ref={selectedRef}>{data.selected}</Select>
          <animated.div
            style={{ ...arrowStyle, width: "fit-content", marginLeft: "auto" }}
          >
            <Icon />
          </animated.div>
        </SelectWrapper>
        <OptionContainer style={wrapperStyle}>
          <Options {...wrapperRef}>
            {items((style, item) => (
              <Option style={style}>
                <Radio
                  type="radio"
                  id={item}
                  name={data.id}
                  value={item}
                  onChange={handleClick}
                />
                <Label htmlFor={item}>{item}</Label>
              </Option>
            ))}
          </Options>
        </OptionContainer>
      </Container>
    </>
  );
};

export default Dropdown;
