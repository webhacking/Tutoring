import React, { Component } from "react";
import "./main.scss";
import ExpBtn from "Components/Button/ExperienceButton";

class Main extends Component {
  handleExperience = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=tutoring.app&referrer=utm_source%3Dgoogle%26utm_campaign%3DGPC_%EB%B8%8C%EB%9E%9C%EB%93%9C_exact%26utm_medium%3Dkeyword_pc";
  };

  render() {
    return (
      <>
        <section className="tutoring_content">
          <article className="content_wrap">
            {/* 메인 image div */}
            <div className="main_wrapper">
              <div className="main_text_wrap">
                <h3 className="main_text_title">
                  시공간 개념없는 요즘 영어
                  <em>24시간 1:1 영어회화앱</em>
                </h3>
              </div>
              <ExpBtn
                className="exp_btn_white"
                onClick={this.handleExperience}
              />
              <div className="main_underbar_wrap">
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
              </div>
            </div>

            {/* image 밑 간략한 About div */}
            <div className="main_about" />
          </article>
        </section>
      </>
    );
  }
}

export default Main;
