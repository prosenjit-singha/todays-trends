import { colors } from "../Styles/Variables";

const blurAmount = [25, 20, 10];
export const menuItems = [
  {
    id: "home",
    name: "Home",
    path: "/",
    color: colors.green[200],
    textShadowFrom: `0px 0px 0px ${colors.green[200]},
        0px 0px 0px ${colors.green[200]},
        0px 0px 0px ${colors.green[200]}`,
    textShadowTo: `0px 0px ${blurAmount[0]}px ${colors.green[200]},
                            0px 0px ${blurAmount[1]}px ${colors.green[200]},
                            0px 0px ${blurAmount[2]}px ${colors.green[200]}`,
    fontWeight: "normal",
    transform: `scale(1)`,
  },
  {
    id: "commandList",
    name: "Command List",
    path: "/command-list",
    color: colors.blue[200],
    textShadowFrom: `0px 0px 0px ${colors.green[200]},
    0px 0px 0px ${colors.green[200]},
    0px 0px 0px ${colors.green[200]}`,
    textShadowTo: `0px 0px ${blurAmount[0]}px ${colors.blue[200]},
                        0px 0px ${blurAmount[1]}px ${colors.blue[200]},
                        0px 0px ${blurAmount[2]}px ${colors.blue[200]}`,
    fontWeight: "normal",
    transform: `scale(1)`,
  },

  {
    id: "about",
    name: "About",
    path: "/about",
    color: colors.yellow[200],
    textShadowFrom: `0px 0px 0px ${colors.green[200]},
    0px 0px 0px ${colors.green[200]},
    0px 0px 0px ${colors.green[200]}`,
    textShadowTo: `0px 0px ${blurAmount[0]}px ${colors.yellow[200]},
                        0px 0px ${blurAmount[1]}px ${colors.yellow[200]},
                        0px 0px ${blurAmount[2]}px ${colors.yellow[200]}`,
    fontWeight: "normal",
    transform: `scale(1)`,
  },
];
