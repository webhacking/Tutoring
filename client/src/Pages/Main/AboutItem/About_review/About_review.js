import React from "react";
import "./review.scss";
import ReviewSlide from "Components/ReviewSlide";
import ReviewList from "Components/ReviewList";

const AboutReview = () => {
  return (
    <div className="main_common main_about_review">
      <div className="review_wrap">
        <strong className="tit_sub">튜터링으로 영어인생을 바꾼 사람들</strong>

        {/* Image Slide 기능이 있는 div */}
        <div className="review_slide_box">
          <ReviewSlide />
        </div>

        {/* 사람들 후기 나오는 componentBox */}
        <div className="review_box">
          <ReviewList />
        </div>
      </div>
      <img
        src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/bg_slice_02.png"
        className="bg_slice"
        alt=""
      />
    </div>
  );
};

export default AboutReview;
