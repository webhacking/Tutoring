import React, { Component } from "react";
import "./main.scss";
import Footer from "Components/Footer";
import Title from "Pages/Main/MainTitle";
import About from "Pages/Main/AboutItem";

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

            {/* 한혜진 사진 밑 박스 */}
            <div className="main_about">
              <About />
            </div>
          </article>
        </section>
        <Footer />
      </>
    );
  }
}

export default Main;
