import React from "react";
import "./title.scss";
import UnderbarItem from "Pages/Main/UnderbarItem";

const Title = () => (
  <div className="main_image_wrapper">
    <div className="main_text_wrap">
      <h3 className="main_text_title">
        시공간 개념없는 요즘 영어
        <em>24시간 1:1 영어회화앱</em>
      </h3>
    </div>
    <a
      href="https://play.google.com/store/apps/details?id=tutoring.app&referrer=utm_source%3Dgoogle%26utm_campaign%3DGPC_%EB%B8%8C%EB%9E%9C%EB%93%9C_exact%26utm_medium%3Dkeyword_pc"
      target="_blank"
      rel="noopener noreferrer"
      className="exp_btn_white"
    >
      지금 무료체험하기
    </a>
    <div className="main_underbar_wrap">
      <UnderbarItem />
    </div>
  </div>
);

export default Title;
