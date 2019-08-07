import React from "react";
import { storyList } from "./StoryItem";

const SlideItem = ({ image_url, show, num }) => {
  return (
    <div className="slide_item" data-curr-num={num} style={{ opacity: num === show ? 1 : 0 }}>
      <div className="desc_story">{storyList[num].div}</div>
      <div className="img_writer" style={{ backgroundImage: `url(${image_url})` }} />
    </div>
  );
};

export default SlideItem;
