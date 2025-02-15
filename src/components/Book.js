import React from "react";

import { update } from "../BooksAPI";

/**
 * @description Display single book
 */
function Book({ book, resetShelf }) {
  /**
   * @description Handle book's shelf change
   * @param {object} e - event
   */
  const handleShelfChange = async (e) => {
    const options = e.target.options;
    const value = options[options.selectedIndex].value;

    await update(book, value);

    resetShelf(value, book);
  };

  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks
                ? `url(${book.imageLinks.thumbnail})`
                : "",
            }}
          />
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf || "none"}
              onChange={handleShelfChange}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Book;
