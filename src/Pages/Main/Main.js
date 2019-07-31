import React, { Component } from "react";
import "./main.scss";
import Footer from "Components/Footer";

import Title from "Pages/Main/MainTitle";
import AboutWhy from "Pages/Main/AboutItem/About_why";
import AboutTuto from "Pages/Main/AboutItem/About_tuto";
import AboutMatch from "Pages/Main/AboutItem/About_match";

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
            <Title onClick={this.handleExperience} />

            <div className="main_about">
              {/* No / Yes 나오는 Div */}
              <AboutWhy />

              {/* Tutoring 소개하는 Div */}
              <AboutTuto />

              {/* 피라미드 Div */}
              <AboutMatch />
            </div>
          </article>
        </section>
        <Footer />
      </>
    );
  }
}

export default Main;
