import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";

function BooksApp() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(async () => {
    setAllBooks(await BooksAPI.getAll());
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home allBooks={allBooks} />
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
