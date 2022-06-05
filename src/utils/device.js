const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletS: 576,
  tablet: 768,
  tabletM: 790,
  laptop: 1024,
  laptopM: 1060,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tabletS: `(min-width: ${size.tabletS}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletM: `(min-width: ${size.tabletM}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopM: `(min-width: ${size.laptopM}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};
