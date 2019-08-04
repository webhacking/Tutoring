import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  render() {
    const { fix } = this.props;

    return (
      <div className={`header_wrap ${fix === true ? "fixed" : ""}`}>
        <h1 className="main_logo">
          튜터링
          <button type="button" className="logo_img" />
        </h1>
      </div>
    );
  }
}

export default Header;
