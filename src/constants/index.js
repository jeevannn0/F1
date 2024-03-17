import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Drivers", "Teams", "Results", "Live Timing"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "seven-time world champion",
        "Lewis Hamilton",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Mercedes after 11 years",
        "for Ferrari  in 2025"],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: ["best moments racing for",
      "the Brackley team"],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["The best is yet",
      "to come"],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "Mercedes AMG F1 W09 EQ Power+",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    }
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "OFFICIAL F1® RACE PROGRAMME",
    "TERMS OF USE",
    "BECOME AN AFFILIATE",
    "LEGAL NOTICES",
    "F1 TV SUPPORT",
  ];