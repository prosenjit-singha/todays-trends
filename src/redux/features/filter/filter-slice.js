import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: {
    id: "country",
    selected: "United States",
    getString: "&country=us",
    list: {
      All: "all",
      Argentina: "ar",
      Australia: "au",
      Austria: "at",
      Belgium: "be",
      Brazil: "br",
      Bulgaria: "bg",
      Canada: "ca",
      China: "cn",
      Colombia: "co",
      Cuba: "cu",
      "Czech Republic": "cz",
      Egypt: "eg",
      France: "fr",
      Germany: "de",
      Greece: "gr",
      "Hong Kong": "hk",
      Hungary: "hu",
      India: "in",
      Indonesia: "id",
      Ireland: "ie",
      Israel: "il",
      Italy: "it",
      Japan: "jp",
      Latvia: "lv",
      Lithuania: "lt",
      Malaysia: "my",
      Mexico: "mx",
      Morocco: "ma",
      Netherlands: "nl",
      "New Zealand": "nz",
      Nigeria: "ng",
      Norway: "no",
      Philippines: "ph",
      Poland: "pl",
      Portugal: "pt",
      Romania: "ro",
      Russia: "ru",
      "Saudi Arabia": "sa",
      Serbia: "rs",
      Singapore: "sg",
      Slovakia: "sk",
      Slovenia: "si",
      "South Africa": "za",
      "South Korea": "kr",
      Sweden: "sr",
      Switzerland: "ch",
      Taiwan: "tw",
      Thailand: "th",
      Turkey: "tr",
      UAE: "ae",
      Ukraine: "ua",
      "United Kingdom": "uk",
      "United States": "us",
      Venuzuela: "ve",
    },
  },
  category: {
    id: "category",
    selected: "All",
    getString: "",
    list: {
      All: "all",
      Business: "business",
      Entertainment: "entertainment",
      General: "general",
      Health: "health",
      Science: "science",
      Sports: "sports",
      Technology: "technology",
    },
  },
  source: {
    id: "domains",
    selected: "All",
    getString: "",
    list: {
      All: "all",
      "BBC NEWS": "bbc.com",
      "CBS Sports": "cbssports.com",
      CNN: "cnn.com",
      CNBC: "cnbc.com",
      "Fox News": "foxnews.com",
      "Indian Express": "indianexpress.com",
      "New York Post": "nypost.com",
      Newsweek: "newsweek.com",
      "New York Times": "nytimes.com",
      "The Verge": "theverge.com",
      "The Daily Beast": "thedailybeast.com",
      "The Guardian": "theguardian.com",
      "USA Today": "usatoday.com",
      "Washington Post": "washingtonpost.com",
    },
  },
  keyword: {
    id: "q",
    text: "",
    getString: "",
  },
  page: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country.selected = action.payload;
      if (action.payload !== "All") {
        state.country.getString =
          "&country=" + state.country.list[action.payload];
      }
    },
    setCategory: (state, action) => {
      state.category.selected = action.payload;
      if (action.payload !== "All") {
        state.category.getString =
          "&category=" + state.category.list[action.payload];
      }
    },
    setSource: (state, action) => {
      state.source.selected = action.payload;
      if (action.payload !== "All") {
        state.source.getString =
          "&sources=" + state.source.list[action.payload];
      }
    },
    setKeyword: (state, action) => {
      state.keyword.text = action.payload;
      if (action.payload !== "") {
        state.keyword.getString = "&q=" + action.payload.split(" ").join("-");
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  setCountry,
  setCategory,
  setSource,
  setKeyword,
  setPage,
} = filterSlice.actions;
