import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./error.scss";

class ErrorPage extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <img src="//cdn.tutoring.co.kr/uploads/home/img/plans/moviengMaster/tudal_counsel.png?v=1" class="tudal_counsel" alt="" />
          </div>
          <h2>페이지가 사라졌어요!</h2>
          <p>찾으시는 페이지 주소가 잘못됐거나 일시적인 문제가 발생했습니다.</p>
          <span onClick={this.handleGoBack} href="#">
            Go To Homepage
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(ErrorPage);
