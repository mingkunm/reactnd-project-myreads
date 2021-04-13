# MyReads Project

This project is a React frontend project using CSS, HTML, and backend API provided by Udacity.

## How To Start

To get started developing right away:

- install all project dependencies with `npm install`

- start the development server with `npm start`

## View demo

[https://mingkunm.github.io/reactnd-project-myreads-starter/](https://mingkunm.github.io/reactnd-project-myreads-starter/)

## App Functionality

### Main Page

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.

The main page also has a link to `/search`, a search page that allows you to find books to add to your library.

### Search Page

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to `/` (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.
