import React from "react";

const TutorSearchBox = ({ type, name, clickHandler, changeHandler }) => (
  <div className="filter_box">
    <div className="filter_left">
      <ul onClick={e => clickHandler(e)}>
        <li className={type === "" ? "on" : null}>All</li>
        <li className={type === "Native" ? "on" : null}>Native</li>
        <li className={type === "Global" ? "on" : null}>Global</li>
        <li className={type === "Chinese" ? "on" : null}>Chinese</li>
      </ul>
    </div>

    <div className="filter_right">
      <input type="text" placeholder="튜터 이름 검색" value={name} onChange={e => changeHandler(e)} />
    </div>
  </div>
);

export default TutorSearchBox;
