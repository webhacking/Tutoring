import React from "react";
import { storyList } from "./StoryItem";

class SlideItem extends React.Component {
  constructor(props) {
    super(props);
    this.storyBox = React.createRef();
  }

  componentDidMount = () => {
    this.storyBox.current.innerHTML = storyList[this.props.num].div;
  };

  render() {
    const { image_url, show, num } = this.props;

    return (
      <div
        className="slide_item"
        data-curr-num={num}
        style={num === show ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="desc_story" ref={this.storyBox} />
        <div className="img_writer" style={{ backgroundImage: `url(${image_url})` }} />
      </div>
    );
  }
}

export default SlideItem;
