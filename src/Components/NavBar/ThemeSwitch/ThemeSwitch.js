import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../Redux/Theme/action";
import { LIGHT, DARK } from "../../Redux/Theme/types";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { Container, Image } from "./styles";

const Icon = ({ mode }) => {
  const styles = {
    width: "25",
    height: "25",
    color: "white",
  };

  return (
    <Image>
      {mode === DARK ? (
        <IoMdMoon style={styles} />
      ) : (
        <BsSunFill style={styles} />
      )}
    </Image>
  );
};

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const handleClick = () => {
    const localTheme = localStorage.getItem("theme");
    const mode = localTheme === LIGHT ? DARK : LIGHT;
    dispatch(toggleTheme(mode));
    localStorage.setItem("theme", mode);
  };
  return (
    <Container onClick={handleClick}>
      <Icon mode={theme.name} />
    </Container>
  );
};

export default ThemeSwitch;
