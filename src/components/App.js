import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import Create from "./users/Create";
import Delete from "./users/Delete";
import Edit from "./users/Edit";
import List from "./users/List";
import Show from "./users/Show";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={List} />
            <Route path="/users/new" exact component={Create} />
            <Route path="/users/delete/:id" exact component={Delete} />
            <Route
              path="/users/edit/:id"
              exact
              component={Edit}
              Edit
            />
            <Route path="/users/:id" exact component={Show} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
