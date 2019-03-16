import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";

import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";

class Layout extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    let data = await fetch("https://demo9197058.mockable.io/users");
    data = await data.json();
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/user/:id"
            component={({ match }) => (
              <UserPage data={this.state.data[match.params.id - 1]} />
            )}
          />
          <Route
            exact
            path="/"
            component={() => <Home data={this.state.data} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Layout;
