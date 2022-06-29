const logic = (keyword, selected, source) => {
  if (source === "" && keyword === "top-headlines?" && selected === "")
    return "&country=us";
  else return selected;
};

export const getAPI = (params) => {
  const { country, source, keyword, category } = params;
  const API_KEY = `https://newsapi.org/v2/${keyword}apiKey=daeddbe4bc074bf48d19a82ff073c046&pageSize=12${logic(
    keyword,
    country,
    source
  )}${category}${source}`;

  return API_KEY;
};

export const boxShadow = {
  blur: 10,
  color: "rgba(0,0,0,0.5)",
  highlight: "rgba(255,255,255,0.4)",
  default(color = this.color, blur = this.blur) {
    return `4px 4px ${blur}px 0px ${color}`;
  },
  glow(color = this.highlight, blur = this.blur) {
    return `0px 0px ${blur + 10}px 0px ${color},
    0px 0px ${blur - 10}px 0px ${color}`;
  },
};

export const toTitle = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getPath = (Name) => {
  if (Name === "home") return "./";
  if (Name === "about") return "./about";
  if (Name === "command-list") return "./command-list";
  if (Name === "developers") return "./developers";
  if (Name === "terms and conditions") return "./terms&conditions";
};
