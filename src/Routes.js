import React from "react";
import Main from "./Pages/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  componentDidMount = () => {
    document.title = "개념없는 24시간 영어회화앱 튜터링";
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
