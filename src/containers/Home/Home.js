import React from "react";
import { useHistory } from "react-router-dom";

import BookContent from "./BooksContent";

/**
 * @description Display content of home page
 */
function Home({ books, resetShelf }) {
  const history = useHistory();
  /**
   * @description Go to search page
   */
  const handleClickSearch = () => history.push("/search");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookContent books={books} resetShelf={resetShelf} />
      <div className="open-search">
        <button onClick={handleClickSearch}>Add a book</button>
      </div>
    </div>
  );
}

export default Home;
