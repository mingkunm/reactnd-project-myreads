import React from "react";

import Book from "../../components/Book";

function Bookshelf({ title, books, resetShelf }) {
  console.log(books);
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.title}>
                <Book book={book} resetShelf={resetShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Bookshelf;
