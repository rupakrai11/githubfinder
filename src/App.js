import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./contaxt/github/GithubState";
import AlertState from "./contaxt/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  // const [clearusers, setClearusers] = useState(false);

  //class base component
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   showClearuser: false,
  //   alert: null,
  // };

  // this.setState({ users: [], loading: false });

  // const { loading, users, user } = this.state;
  // const { repos } = this.state;

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
