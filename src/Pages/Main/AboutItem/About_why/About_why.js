import React from "react";
import "./why.scss";

const AboutWhy = () => (
  <div className="main_about_why">
    <div className="about_left">
      <div className="left_innerbox">
        <em className="emph_sub">내가 맞추는 영어공부</em>
        <h3 className="tit_about">
          실패한 영어공부, <br />
          당신 탓이 아닙니다
        </h3>
        <ul className="list_about">
          <li>
            <strong>너무 바쁜 일정</strong>
            야근, 약속, 알바에 회식까지 <br />
            출석 자체가 힘든 바쁜 일정
          </li>
          <li>
            <strong>지루한 강의</strong>
            관심 없는 주제, <br />
            일방적인 모니터속 강의로 떨어지는 집중력
          </li>
          <li>
            <strong>늘지 않는 스피킹</strong>
            같은 패턴의 반복, <br />
            1시간에 3번 말하면 다행인 단체 수업
          </li>
        </ul>
        <span className="bg_txt bg_no">No</span>
      </div>
      <img
        src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/bg_slice_01.png"
        className="bg_slice bg_slice_m"
        alt=""
      />
      <img
        src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/bg_slice_02.png"
        className="bg_slice bg_slice_pc"
        alt=""
      />
    </div>
    <div className="about_right">
      <div className="right_innerbox">
        <em className="emph_sub">이제는 내게 맞추는 영어공부</em>
        <h3 className="tit_about">
          성공한 영어공부, <br />
          200만명의 선택 튜터링
        </h3>
        <ul className="list_about">
          <li>
            <strong>바빠도 OK! 아무때나 수업 가능</strong>
            수업시작 버튼만 누르면 24시간 즉시 <br />
            튜터와 연결되니까 바빠도 걱정없이
          </li>
          <li>
            <strong>재미 OK! 내가 고르는 수업주제 </strong>
            오픽, 비즈니스, 여행 등 내 관심사를 <br />
            직접 골라 수업해 몰입도가 다른 수업
          </li>
          <li>
            <strong>실력 UP! 전문 튜터와 맞춤 수업</strong>
            7단계 검증한 전문 튜터의 평점, 분야보고 <br />
            직접 선택하니 내게 꼭 맞는 수업
          </li>
        </ul>
        <span className="bg_txt bg_yes">No</span>
        <img
          src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/bg_slice_02.png"
          className="bg_slice bg_slice_m"
          alt=""
        />
        <img
          src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/bg_slice_after.png"
          className="bg_slice bg_slice_pc"
          alt=""
        />
      </div>
    </div>
  </div>
);

export default AboutWhy;
