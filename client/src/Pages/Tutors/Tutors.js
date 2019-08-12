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

  // WillMount 는 곧 없어질 예정으로 사용 금지.
  // componentWillMount = () => {
  //   this.getTutorNum();
  // };

  componentDidMount = () => {
    document.title = "튜터"; // Helmet을 사용하도록 !!
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

  //callback으로 설정해서 render에서 부르지 않고 바로 렌더링할 수 있도록??
  listFilter = () => {
    const { type, name, tutor_list } = this.state;
    let filteredList = [];

    if (tutor_list) {
      filteredList = tutor_list.filter(tutor => {
        if (type !== "") {
          return tutor.type.includes(type);
        }

        return tutor.name.toLowerCase().includes(name.toLowerCase());
      });
    }

    return filteredList.length > 0 ? <TutorList list={filteredList} /> : <EmptyResult />;
  };

  render() {
    const { type, name, tutor_total, isLoaded } = this.state;

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

            <div className="tutor_list">{isLoaded ? <Spinner /> : this.listFilter()}</div>
            <div className="pagination">
              <div onClick={this.handleShowMore} className="showmore">
                <p>더 보기</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Tutors;
