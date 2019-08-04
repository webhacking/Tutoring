import React, { Component } from "react";
import "./main.scss";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Title from "Pages/Main/MainTitle";
import About from "Pages/Main/AboutItem";

class Main extends Component {
  state = {
    fixed: false
  };

  handleExperience = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=tutoring.app&referrer=utm_source%3Dgoogle%26utm_campaign%3DGPC_%EB%B8%8C%EB%9E%9C%EB%93%9C_exact%26utm_medium%3Dkeyword_pc",
      "_blank"
    );
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.checkNavbar);
  };

  checkNavbar = () => {
    let pageY = window.pageYOffset;
    const isFixed = this.state.fixed;

    if (!isFixed && pageY >= 46) {
      this.setState({
        fixed: true
      });
    } else if (isFixed && pageY <= 46) {
      this.setState({
        fixed: false
      });
    }
  };

  render() {
    const { fixed } = this.state;

    return (
      <>
        <Header fix={fixed} />
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
