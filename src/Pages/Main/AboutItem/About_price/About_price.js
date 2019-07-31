import React from "react";
import "./price.scss";

const AboutPrice = () => (
  <div className="main_common main_about_price">
    <div className="price_wrap">
      <em className="tit_sub">튜터링만의 특허 기술로 만든</em>
      <h3 className="tit_item">반값으로 영어공부</h3>
      <p className="txt_g">
        <b>콜센터 운영을 대체하는 최첨단 기술</b>
        예약 없이 실시간 튜터를 연결하는
        <span className="txt_b_m">RTC(Real Time Communication)기술</span>
      </p>
      <p className="txt_g">
        <b>비효율적 교재 제작 대신 온라인 무료 교재 개발</b>
        다양한 학생 수요에 맞추는 열린 방식의 콘텐츠 생산
      </p>
      <p className="txt_g">
        <b>상주 튜터 체재비를 없애는 기술</b>
        튜터 실시간 매칭 방식으로 튜터 체재비 Zero
      </p>
      <div className="thumb_item">
        <img
          src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/img_price.png"
          className="img_g"
          alt=""
        />
        <span>1:1 월 200분 수업 기준</span>
      </div>
      <ul className="list_obtain">
        <li>
          국내최초 모바일 1:1회화
          <br />
          독점적 특허 보유
          <span className="txt_info">특허 제 10-1771797호</span>
        </li>
        <li>
          2018 KCSA 소비자만족도
          <br />
          영어회화 부문 1위
        </li>
        <li>
          2017 모바일 어워드
          <br />
          이달의 앱 선정
        </li>
      </ul>
    </div>
  </div>
);

export default AboutPrice;
