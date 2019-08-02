import React, { Component } from "react";
import "./tutors.scss";
import TutorList from "Components/TutorList";
import { tutor_en } from "./Data/Tutor_en";

class Tutors extends Component {
  state = {
    name: "",
    tutor_list: tutor_en
  };

  onChangeHandler = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    const { name, tutor_list } = this.state;

    const filteredList = tutor_list.filter(tutor => {
      return tutor.name.toLowerCase().includes(name.toLowerCase());
    });

    return (
      <div className="tutors_wrap">
        <div className="tutor_container">
          <h2 className="title">튜터 ({tutor_en.length})</h2>
          <div className="filter_box">
            <div className="filter_left">
              <ul>
                <li>All</li>
                <li>Native</li>
                <li>Global</li>
                <li>Chinese</li>
              </ul>
            </div>

            <div className="filter_right">
              <input type="text" placeholder="튜터 이름 검색" value={name} onChange={e => this.onChangeHandler(e)} />
            </div>
          </div>

          <div className="tutor_list">
            <TutorList list={filteredList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tutors;
