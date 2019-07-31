import React from "react";
import "./match.scss";

const AboutMatch = () => (
  <div className="main_about_match">
    <div className="match_wrap">
      <em class="tit_sub">내 수준과 학습 목표에 집중한</em>
      <h3 class="tit_item">일대일 영어공부</h3>
      <strong class="tit_g">튜터링은 왜 1:1을 고집할까요?</strong>
      <p class="txt_g">
        똑같은 1시간을 공부해도&nbsp;
        <span class="txt_b_m">
          <b>튜터링은 90%</b>의 학습효과를 내는 반면
        </span>
        인강으로는 5%의 효과 밖에 내지 못합니다.
      </p>
      <p class="txt_g">
        영어 말하기를 잘 할 수 있는 가장 효율적인 방법은 <br />
        1:1 로 원어민과 소통하는 것입니다.
      </p>
      <div class="thumb_item">
        <img
          src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/img_pyramid.png"
          class="img_g"
          alt="match"
        />
        <span>학습 효율성 피라미드</span>
        <span class="txt_info">
          (출처 : National Training Laboratories, Bethel, Maine)
        </span>
      </div>
    </div>
    <img
      src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/bg_slice_02.png"
      class="bg_slice"
      alt=""
    />
  </div>
);

export default AboutMatch;
