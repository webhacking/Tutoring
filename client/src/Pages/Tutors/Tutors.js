import React, { Component } from "react";
import "./tutors.scss";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Spinner from "Components/Spinner";
import TutorList from "Components/TutorList";
import TutorSearchBox from "Components/TutorSearchBox";
import { tutor_en } from "./Data/Tutor_en";

class Tutors extends Component {
  // constructor() {
  //   super();
  //   this.state = { isLoaded: true };
  // }

  state = {
    isLoaded: true,
    name: "",
    type: "",
    tutor_list: [],
    nowPage: 1
  };

  componentDidMount = () => {
    this.getTutors();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.nowPage !== prevState.nowPage) {
      this.getTutors();
    }
  }

  getTutors = async () => {
    const { nowPage, isLoaded } = this.state;
    console.log(nowPage);

    if (!isLoaded) {
      this.setState({ isLoaded: true });
    }

    const response = await fetch(`/api/tutors?page=${nowPage}`);
    const body = await response.json();

    this.setState({
      tutor_list: body,
      isLoaded: false
    });
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

  pageHandler = (e, num) => {
    let nowPage = this.state.nowPage;

    if (num === "+") {
      nowPage++;

      // if (pageNum >= slideList.length - 1) {
      //   curr_idx = slideList.length - 1;
      // }

      this.setState({
        nowPage
      });
    } else if (num === "-") {
      nowPage--;

      if (nowPage < 1) {
        nowPage = 1;
      }

      this.setState({
        nowPage
      });
    }
  };

  render() {
    const { type, name, tutor_list, isLoaded } = this.state;
    let filteredList = [];

    if (tutor_list) {
      filteredList = tutor_list.filter(tutor => {
        if (type !== "") {
          return tutor.type.includes(type);
        }

        return tutor.name.toLowerCase().includes(name.toLowerCase());
      });
    }

    return (
      <>
        <Header fix={true} />
        <div className="tutors_wrap">
          <div className="tutor_container">
            <h2 className="title">튜터 ({tutor_en.length})</h2>
            <TutorSearchBox
              type={type}
              value={name}
              clickHandler={this.typeClickHandler}
              changeHandler={this.onChangeHandler}
              pageHandler={this.pageHandler}
            />

            <div className="tutor_list">{isLoaded ? <Spinner /> : <TutorList list={filteredList} />}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Tutors;
