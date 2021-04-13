import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Book from "../../components/Book";
import { search } from "../../BooksAPI";

function Search({ resetShelf, booksShelf }) {
  const [searchResult, setSearchResult] = useState([]);

  const history = useHistory();
  const handleClickHome = () => history.push("/");

  const handleInputChange = async (e) => {
    const input = e.target.value;
    const books = input && (await search(input));

    if (books) {
      books.forEach((book) => {
        if (booksShelf[book.id]) book.shelf = booksShelf[book.id];
      });

      setSearchResult(books);
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
