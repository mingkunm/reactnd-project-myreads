import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";

function BooksApp() {
  const [allBooks, setAllBooks] = useState([]);
  const [booksShelf, setBooksShelf] = useState({});

  const initialShelf = (books) => {
    const bookWithShelf = {};

    books.forEach((book) => {
      bookWithShelf[book.id] = book.shelf;
    });

    setBooksShelf(bookWithShelf);
  };

  useEffect(async () => {
    const books = await BooksAPI.getAll();

    setAllBooks(books);
    initialShelf(books);
  }, []);

  const resetShelf = (updateValue, updateBook) => {
    let updatedBooks;

    if (updateValue === "none" && booksShelf[updateBook.id]) {
      updatedBooks = allBooks.filter((book) => book.title !== updateBook.title);
    } else if (!booksShelf[updateBook.id]) {
      updateBook.shelf = updateValue;
      updatedBooks = [...allBooks, updateBook];
    } else {
      updatedBooks = allBooks.map((book) =>
        book.id === updateBook.id ? { ...book, shelf: updateValue } : book
      );
    }

    setAllBooks(updatedBooks);
    setBooksShelf({ ...booksShelf, [updateBook.id]: updateValue });
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {allBooks.length > 0 && (
              <Home exact books={allBooks} resetShelf={resetShelf} />
            )}
          </Route>
          <Route exact path="/search">
            <Search resetShelf={resetShelf} booksShelf={booksShelf} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default BooksApp;
