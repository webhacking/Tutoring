import React, { Component } from "react";
import "./tutors.scss";
import TutorList from "Components/TutorList";
import TutorSearchBox from "Components/TutorSearchBox";
import { tutor_en } from "./Data/Tutor_en";

class Tutors extends Component {
  state = {
    name: "",
    type: "",
    tutor_list: tutor_en
  };

  onChangeHandler = e => {
    this.setState({
      name: e.target.value
    });
  };

  typeClickHandler = e => {
    if (e.target.innerHTML === "All") {
      this.setState({
        type: ""
      });
    } else {
      this.setState({
        type: e.target.innerHTML
      });
    }
  };

  render() {
    const { type, name, tutor_list } = this.state;

    const filteredList = tutor_list.filter(tutor => {
      if (type !== "") {
        return tutor.type.includes(type);
      }

      return tutor.name.toLowerCase().includes(name.toLowerCase());
    });

    return (
      <div className="tutors_wrap">
        <div className="tutor_container">
          <h2 className="title">튜터 ({tutor_en.length})</h2>
          <TutorSearchBox type={type} value={name} clickHandler={this.typeClickHandler} changeHandler={this.onChangeHandler} />

          <div className="tutor_list">
            <TutorList list={filteredList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tutors;
