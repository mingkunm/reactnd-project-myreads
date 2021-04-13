import React, { useEffect, useState } from "react";

import Bookshelf from "./Bookshelf";

function BooksContent({ books, resetShelf }) {
  const [shelfBooks, setShelfBooks] = useState([]);

  useEffect(
    () => {
      setShelfBooks(books);
    },
    [books]
  );

  return (
    <div className="list-books-content">
      <Bookshelf
        title="Currently Reading"
        books={shelfBooks.filter((book) => book.shelf === "currentlyReading")}
        resetShelf={resetShelf}
      />
      <Bookshelf
        title="Want to Read"
        books={shelfBooks.filter((book) => book.shelf === "wantToRead")}
        resetShelf={resetShelf}
      />
      <Bookshelf
        title="Read"
        books={shelfBooks.filter((book) => book.shelf === "read")}
        resetShelf={resetShelf}
      />
    </div>
  );
}

export default BooksContent;
