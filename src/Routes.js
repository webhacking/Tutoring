import React from "react";
import Footer from "Components/Footer";
import Main from "./Pages/Main";
import Tutors from "./Pages/Tutors";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  componentDidMount = () => {
    document.title = "개념없는 24시간 1:1 영어회화앱 튜터링";
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/home/tutors" component={Tutors} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
