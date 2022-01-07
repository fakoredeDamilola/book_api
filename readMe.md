# This is a book api, that allows users to create books with different genres, routes included are

## /book

* `/` : get all books

* `/:id` : get a book with a particular id

* `/:id` : delete a particular book with the id as param

* `/add` : create a new book

* `/edit/:id` : edit a book with the id

## /genre

* `/:genre` : get all the books in this genre

* `/:genre` : update every book with this genre

* `/:genree` : delete every book with this genre

## run

`npm run dev` or `node server.js`