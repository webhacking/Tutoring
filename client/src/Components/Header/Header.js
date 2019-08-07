import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

class Header extends Component {
  goHome = () => {
    window.location.href = "/home";
  };

  state = {
    isHover: false,
    selectedMenu: ""
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

  menuHandler = e => {
    this.setState({
      selectedMenu: e.target.innerHTML
    });
  };

  render() {
    const { fix } = this.props;
    const { isHover, selectedMenu } = this.state;

    return (
      <header className={`header_wrap ${fix === true || isHover === true ? "fixed" : ""}`}>
        <div className="header_inner">
          <h1 className="main_logo">
            <span className="logo_span" onClick={this.goHome}>
              튜터링
            </span>
          </h1>
          <p className="logo_sub">24시간 1:1 영어회화앱</p>
          <nav className="gnb" onMouseOver={this.handleHover}>
            <ul onMouseOver={this.menuHandler}>
              <li>수강권보기</li>
              <li>튜터소개</li>
              <li>토픽소개</li>
              <li>수강후기</li>
              <li>B2B프로그램</li>
            </ul>
          </nav>
        </div>
        <div className={`sub_gnb ${isHover === true ? "show_sub" : ""}`} onMouseLeave={this.handleLeave}>
          <ul className="sub_gnb_ul">
            <li className={`sub_list sub_list_01 ${selectedMenu === "수강권보기" ? "selected" : null}`}>
              <button type="button">기본 수강권(영어)</button>
              <button type="button">기본 수강권(중국어)</button>
              <img src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/tudal_gnb01.png" alt="튜달이" className="sub_icon" />
            </li>
            <li className={`sub_list sub_list_02 ${selectedMenu === "수강권보기" && "selected"}`}>
              <button type="button">직딩의 품격</button>
              <button type="button">무빙마스터</button>
              <button type="button">100일의 기적</button>
              <button type="button">결합상품</button>
            </li>
            <li className={`sub_list sub_list_03 ${selectedMenu === "튜터소개" && "selected"}`}>
              <Link to="/home/tutors">
                <button type="button">영어 튜터</button>
              </Link>
              <button type="button">중국어 튜터</button>
              <img src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/tudal_gnb02.png" alt="튜달이" className="sub_icon" />
            </li>
            <li className={`sub_list sub_list_04 ${selectedMenu === "토픽소개" && "selected"}`}>
              <button type="button">영어 토픽</button>
              <button type="button">중국어 토픽</button>
              <button type="button">카드 뉴스</button>
              <button type="button">Editor's Pick</button>
              <img src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/tudal_gnb03.png" alt="튜달이" className="sub_icon" />
            </li>
            <li className={`sub_list sub_list_05 ${selectedMenu === "B2B프로그램" && "selected"}`}>
              <button type="button">기업 수강/제휴 할인</button>
              <img src="//cdn.tutoring.co.kr/uploads/home/img/main/version3/tudal_gnb05.png" alt="튜달이" className="sub_icon" />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
