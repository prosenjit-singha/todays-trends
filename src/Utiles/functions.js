export const boxShadow = {
  blur: "15",
  color: "rgba(0,0,0,0.5)",
  highlight: "rgba(255,255,255,0.4)",
  default(color = this.color, blur = this.blur) {
    return `4px 4px ${blur}px 0px ${color}`;
  },
  glow(color = this.highlight, blur = this.blur) {
    return `0px 0px ${blur}px 0px ${color}`;
  },
};
