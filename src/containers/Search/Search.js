import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Book from "../../components/Book";
import { search } from "../../BooksAPI";

/**
 * @description Search page
 */
function Search({ resetShelf, booksShelf }) {
  const [searchResult, setSearchResult] = useState([]);

  const history = useHistory();
  /**
   * @description Go to home page
   */
  const handleClickHome = () => history.push("/");

  /**
   * @description Handle search box input change
   * @param {object} e - event
   */
  const handleInputChange = async (e) => {
    const input = e.target.value;

    if (input) {
      const books = await search(input);

      if (books.length > 0) {
        books.forEach((book) => {
          if (booksShelf[book.id]) book.shelf = booksShelf[book.id];
        });

        setSearchResult(books);
      } else {
        setSearchResult([]);
      }
    } else {
      setSearchResult([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={handleClickHome}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResult.length > 0 &&
            searchResult.map((book) => (
              <li key={book.id}>
                <Book book={book} resetShelf={resetShelf} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
