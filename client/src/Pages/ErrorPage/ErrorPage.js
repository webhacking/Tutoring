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
            <h1>Oops!</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <span onClick={this.handleGoBack} href="#">
            Go To Homepage
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(ErrorPage);
