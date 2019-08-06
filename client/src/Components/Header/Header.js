import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

class Header extends Component {
  goHome = () => {
    window.location.href = "/home";
  };

  state = {
    isHover: false
  };

  handleHover = () => {
    this.setState({
      isHover: true
    });
  };

  handleLeave = () => {
    this.setState({
      isHover: false
    });
  };

  render() {
    const { fix } = this.props;
    const { isHover } = this.state;

    return (
      <div className={`header_wrap ${fix === true || isHover === true ? "fixed" : ""}`} onMouseLeave={this.handleLeave}>
        <h1 className="main_logo">
          <span className="logo_span" onClick={this.goHome}>
            튜터링
          </span>
        </h1>
        <p className="logo_sub">24시간 1:1 영어회화앱</p>
        <nav className="gnb" onMouseOver={this.handleHover}>
          <ul>
            <li>수강권보기</li>
            <Link to="/home/tutors">
              <li>튜터소개</li>
            </Link>
            <li>토픽소개</li>
            <li>수강후기</li>
            <li>B2B프로그램</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
