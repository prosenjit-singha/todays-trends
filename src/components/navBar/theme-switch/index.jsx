import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/features/theme/theme-slice";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { Container, Image } from "./styles";
import { neutral } from "../../../utils/colors";

const Icon = ({ mode }) => {
  const styles = {
    width: "25",
    height: "25",
    color: mode === "dark" ? neutral[200] : neutral[700],
  };

  return (
    <Image>
      {mode === "dark" ? (
        <BsSunFill style={styles} />
      ) : (
        <IoMdMoon style={styles} />
      )}
    </Image>
  );
};

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.props);
  const handleClick = () => {
    const localTheme = localStorage.getItem("theme");
    const mode = localTheme === "light" ? "dark" : "light";
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
