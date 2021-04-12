import React from "react";
import { useHistory } from "react-router-dom";

import Bookshelf from "./Bookshelf";

function Home({ allBooks }) {
  const history = useHistory();
  const handleClickSearch = () => history.push("/search");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf
          title="Currently Reading"
          books={allBooks.filter((book) => book.shelf === "currentlyReading")}
        />
        <Bookshelf
          title="Want to Read"
          books={allBooks.filter((book) => book.shelf === "wantToRead")}
        />
        <Bookshelf
          title="Read"
          books={allBooks.filter((book) => book.shelf === "read")}
        />
      </div>
      <div className="open-search">
        <button onClick={handleClickSearch}>Add a book</button>
      </div>
    </div>
  );
}

export default Home;
