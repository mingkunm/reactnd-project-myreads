import React from "react";

import Bookshelf from "./Bookshelf";

/**
 * @description Assign books to different shelves
 */
function BooksContent({ books, resetShelf }) {
  return (
    <div className="list-books-content">
      <Bookshelf
        title="Currently Reading"
        books={books.filter((book) => book.shelf === "currentlyReading")}
        resetShelf={resetShelf}
      />
      <Bookshelf
        title="Want to Read"
        books={books.filter((book) => book.shelf === "wantToRead")}
        resetShelf={resetShelf}
      />
      <Bookshelf
        title="Read"
        books={books.filter((book) => book.shelf === "read")}
        resetShelf={resetShelf}
      />
    </div>
  );
}

export default BooksContent;
