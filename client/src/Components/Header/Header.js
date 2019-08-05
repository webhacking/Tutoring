import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  goHome = () => {
    window.location.href = "/home";
  };

  render() {
    const { fix } = this.props;

    return (
      <div className={`header_wrap ${fix === true ? "fixed" : ""}`}>
        <h1 className="main_logo">
          튜터링
          <button type="button" className="logo_img" onClick={this.goHome} />
        </h1>
      </div>
    );
  }
}

export default Header;
