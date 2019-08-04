import React from "react";

const Iframe = ({ title, video_id }) => {
  return (
    <iframe
      title={title}
      width="100%"
      height="100%"
      className="curr_play"
      src={`https://www.youtube.com/embed/${video_id}?rel=0&vq=hd1080&rel=0&autoplay=0`}
      frameBorder="0"
      scrolling="no"
    />
  );
};

export default Iframe;
