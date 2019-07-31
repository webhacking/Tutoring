import React from "react";
import "./underbar.scss";

const UnderbarItem = () => {
  return (
    <>
      <ul className="main_underbar_item">
        <li>
          <span className="underbar_icon_down icon" />
          누적다운로드
          <em>200만</em>
        </li>
        <li>
          <span className="underbar_icon_star icon" />
          수강생추천율
          <em>96%</em>
        </li>
        <li>
          <span className="underbar_icon_chart icon" />
          연평균회원증가율
          <em>800%</em>
        </li>
        <li>
          <span className="underbar_icon_mark icon" />
          영어회화만족도
          <em>1위</em>
        </li>
      </ul>
      <p>2019년1월기준</p>
    </>
  );
};

export default UnderbarItem;
