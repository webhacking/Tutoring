import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./error.scss";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <a onClick={this.handleGoBack} href="#">
            Go To Homepage
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(ErrorPage);
