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

  componentDidMount() {
    window.addEventListener("scroll", this.checkNavbar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkNavbar);
  }

  checkNavbar = () => {
    let pageY = window.pageYOffset;
    const isFixed = this.state.fixed;
    console.log("스크롤 이벤트");

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
    console.log("scrolling render");

    return (
      <>
        <Header fix={fixed} />
        <section className="tutoring_content">
          <article className="content_wrap">
            {/* 메인 image div */}
            <Title />

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
