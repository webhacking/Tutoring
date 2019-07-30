import React, { Component } from "react";
import "./main.scss";
import ExpBtn from "Components/Button/ExperienceButton";
import UnderbarItem from "Pages/Main/UnderbarItem";
import About_why from "Pages/Main/AboutItem/About_why";
import About_tuto from "Pages/Main/AboutItem/About_tuto";

class Main extends Component {
  handleExperience = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=tutoring.app&referrer=utm_source%3Dgoogle%26utm_campaign%3DGPC_%EB%B8%8C%EB%9E%9C%EB%93%9C_exact%26utm_medium%3Dkeyword_pc",
      "_blank"
    );
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
                <UnderbarItem />
              </div>
            </div>

            {/* No / Yes 나오는 Div */}
            <About_why />

            {/* Tutoring 소개하는 Div */}
            <About_tuto />
          </article>
        </section>
      </>
    );
  }
}

export default Main;
