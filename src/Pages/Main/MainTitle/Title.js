import React from "react";
import "./title.scss";
import ExpBtn from "Components/Button/ExperienceButton";
import UnderbarItem from "Pages/Main/UnderbarItem";

const Title = ({ onClick }) => (
  <div className="main_image_wrapper">
    <div className="main_text_wrap">
      <h3 className="main_text_title">
        시공간 개념없는 요즘 영어
        <em>24시간 1:1 영어회화앱</em>
      </h3>
    </div>
    <ExpBtn className="exp_btn_white" onClick={onClick} />
    <div className="main_underbar_wrap">
      <UnderbarItem />
    </div>
  </div>
);

export default Title;
