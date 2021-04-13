import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";

function BooksApp() {
  const [allBooks, setAllBooks] = useState([]);

  const bookTitles = new Set();
  const initialSet = (books) => {
    books.forEach((book) => {
      bookTitles.add(book.title);
    });
  };

  useEffect(async () => {
    const books = await BooksAPI.getAll();

    setAllBooks(books);
    initialSet(books);
  }, []);

  const resetShelf = (updateValue, updateBook) => {
    let updatedBooks;

    if (updateValue === "none" && bookTitles.has(updateBook.title)) {
      updatedBooks = allBooks.filter((book) => book.title !== updateBook.title);
      bookTitles.delete(updateBook.title);
    } else {
      updatedBooks = allBooks.map((book) =>
        book.title === updateBook.title ? { ...book, shelf: updateValue } : book
      );
    }

    setAllBooks(updatedBooks);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {allBooks.length > 0 && (
              <Home books={allBooks} resetShelf={resetShelf} />
            )}
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
