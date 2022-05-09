//   Example
//   100: "hsl(240, 5%, 40%)",
//   200: "hsl(230, 10%, 90%)",
//   300: "hsl(230, 10%, 80%)",
//   400: "hsl(230, 10%, 70%)",
//   500: "hsl(0, 100%,88%)",
//   600: "hsl(350, 100%, 88%)",
//   700: "hsl(230, 10%, 40%)",
//   800: "hsl(230, 10%, 30%)",
//   900: "hsl(230, 10%, 20%)",
//   1000: "hsl(230, 10%, 10%)",
//   1100: "hsl(230, 10%, 5%)",
const calColor = (hue, saturation, lightness) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
const generateColorTones = (h, s) => {
  return {
    100: calColor(h, s, 95),
    200: calColor(h, s, 90),
    300: calColor(h, s, 80),
    400: calColor(h, s, 70),
    500: calColor(h, s, 60),
    600: calColor(h, s, 50),
    700: calColor(h, s, 40),
    800: calColor(h, s, 30),
    900: calColor(h, s, 20),
    1000: calColor(h, s, 10),
    1100: calColor(h, s, 5),
  };
};

export const neutral = generateColorTones(180, 10);

export const blue = generateColorTones(240, 100);

export const cyan = generateColorTones(180, 100);

export const lightGreen = generateColorTones(165, 100);

export const yellow = generateColorTones(60, 100);

export const red = generateColorTones(0, 100);

export const orange = generateColorTones(40, 100);

export const green = generateColorTones(140, 100);

export const magenta = generateColorTones(300, 100);

export const pink = calColor(350, 100, 88);
