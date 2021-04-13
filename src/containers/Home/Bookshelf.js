import React from "react";

import Book from "../../components/Book";

/**
 * @description Map books which has same shelf on the shelf
 */
function Bookshelf({ title, books, resetShelf }) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
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
