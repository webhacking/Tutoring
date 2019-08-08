import React, { Component } from "react";
import "./tutors.scss";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Spinner from "Components/Spinner";
import TutorList from "Components/TutorList";
import TutorSearchBox from "Components/TutorSearchBox";
import EmptyResult from "Components/TutorEmptyResultPage";
// import { tutor_en } from "./Data/Tutor_en";

class Tutors extends Component {
  state = {
    isLoaded: true,
    name: "",
    type: "",
    tutor_list: [],
    tutor_total: 0,
    start: 0,
    end: 20
  };

  // componentWillMount = () => {
  //   this.getTutorNum();
  // };

  componentDidMount = () => {
    document.title = "튜터";
    this.getTutorNum();
    this.getTutors();
  };

  getTutorNum = async () => {
    const response = await fetch("/tutors/total");
    const num = await response.json();

    this.setState({
      tutor_total: num.totalNum
    });
  };

  getTutors = async () => {
    const { start, end, isLoaded } = this.state;
    // console.log(nowPage);

    if (!isLoaded) {
      this.setState({ isLoaded: true });
    }

    const response = await fetch(`/tutors?start=${start}&end=${end}`);
    const body = await response.json();

    this.setState({
      isLoaded: false,
      tutor_list: body
      // },
      // () => {
      //   this.scrollHandler();
      // }
    });
  };

  handleShowMore = async () => {
    const { tutor_list } = this.state;

    const start = tutor_list.length;
    const end = start + 20;

    const res = await fetch(`/tutors?start=${start}&end=${end}`);
    const data = await res.json();

    // console.log(data);

    this.setState({
      tutor_list: [...tutor_list, ...data]
    });
  };

  // scrollHandler = () => {
  //   const currScrollY = window.scrollY;

  //   if (currScrollY >= 2134) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth"
  //     });
  //   }
  // };

  onChangeHandler = e => {
    this.setState({
      name: e.target.value
    });
  };

  typeClickHandler = e => {
    let clickedType = "";

    if (e.target.innerHTML !== "All") {
      clickedType = e.target.innerHTML;
    } else {
      clickedType = "";
    }

    this.setState({ type: clickedType });
  };

  // pageHandler = () => {
  //   let nowPage = this.state.nowPage;

  //   if (num === "+") {
  //     nowPage++;

  //     // if (pageNum >= slideList.length - 1) {
  //     //   curr_idx = slideList.length - 1;
  //     // }

  //     this.setState({
  //       nowPage
  //     });
  //   } else if (num === "-") {
  //     nowPage--;

  //     if (nowPage < 1) {
  //       nowPage = 1;
  //     }

  //     this.setState({
  //       nowPage
  //     });
  //   }
  // };

  render() {
    const { type, name, tutor_list, tutor_total, isLoaded } = this.state;
    let filteredList = [];

    if (tutor_list) {
      filteredList = tutor_list.filter(tutor => {
        if (type !== "") {
          return tutor.type.includes(type);
        }

        return tutor.name.toLowerCase().includes(name.toLowerCase());
      });
    }

    let resultComponent = filteredList.length > 0 ? <TutorList list={filteredList} /> : <EmptyResult />;

    return (
      <>
        <Header fix={true} />
        <div className="tutors_wrap">
          <div className="tutor_container">
            <h2 className="title">튜터 ({tutor_total})</h2>
            <TutorSearchBox
              type={type}
              value={name}
              clickHandler={this.typeClickHandler}
              changeHandler={this.onChangeHandler}
              pageHandler={this.pageHandler}
            />

            <div className="tutor_list">{isLoaded ? <Spinner /> : resultComponent}</div>
            <div className="pagination">
              {filteredList.length > 0 && (
                <div onClick={this.handleShowMore} className="showmore">
                  <p>더 보기</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Tutors;
