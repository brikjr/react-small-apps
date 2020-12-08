import "./Seasons.css"
import React from "react";
//another way to assian values instead of ternary operator

const SeasonsConfig = {
  summer: {
    text: " The Weather is very Hot ",
    iconName: "sun"
  },
  winter: {
    text: " The Weather is very cold ",
    iconName: "snowflake"
  },
};

const getSeasons = (lat, month) => {
  if (month > 3 && month < 10) {
   
    return lat > 0 ? "summer" : "winter";
   
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const Seasons = (props) => {
  const SeasonsDisplay = getSeasons(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonsConfig[SeasonsDisplay];
  return (
    <div className={`container ${SeasonsDisplay}`}>
      <i className={`left-icon massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`right-icon massive ${iconName} icon`}></i>
    </div>
  );
};

export default Seasons;
