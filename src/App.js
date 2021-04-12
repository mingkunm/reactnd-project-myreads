import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";

function BooksApp() {
  useEffect(async () => {
    // const all = BooksAPI.getAll();
    // console.log(await BooksAPI.getAll());
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default BooksApp;
