import React from "react";
import SlideItem from "Components/ReviewSlideItem";
import "./slide.scss";

const slideList = [
  {
    img_src: "//cdn.tutoring.co.kr/uploads/home/img/main/version3/story_01_pc.png"
  },
  {
    img_src: "//cdn.tutoring.co.kr/uploads/home/img/main/version3/story_02_pc.png"
  },
  {
    img_src: "//cdn.tutoring.co.kr/uploads/home/img/main/version3/story_03_pc.png"
  },
  {
    img_src: "//cdn.tutoring.co.kr/uploads/home/img/main/version3/story_04_pc.png"
  }
];

class ReviewSlide extends React.Component {
  state = {
    show_idx: 0
  };

  handleShow = (e, oper) => {
    let curr_idx = this.state.show_idx;

    if (oper === "+") {
      curr_idx++;

      if (curr_idx >= slideList.length - 1) {
        curr_idx = slideList.length - 1;
      }

      this.setState({
        show_idx: curr_idx
      });
    } else {
      curr_idx--;

      if (curr_idx < 0) {
        curr_idx = 0;
      }

      this.setState({
        show_idx: curr_idx
      });
    }
  };

  render() {
    return (
      <>
        <div className="slider_wrap">
          {slideList.map((item, idx) => {
            return (
              <SlideItem key={idx} image_url={item.img_src} show={this.state.show_idx} num={idx} />
            );
          })}
        </div>
        <div onClick={e => this.handleShow(e, "-")} className="slide_btn" />
        <div onClick={e => this.handleShow(e, "+")} className="slide_btn" />
      </>
    );
  }
}

export default ReviewSlide;
