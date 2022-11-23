import { useState } from "react";
import { Link } from "react-router-dom";
import * as bookapi from '../BooksAPI';
import BookShelfGhanger from "./BookShelfChanger";
const Search = ({changeShelf}) => {
  const [searchQue , setSearchQue] = useState('');
  const [results , setResults] = useState([]); 


  const searchFunc = async() => {
        const res = await bookapi.search(searchQue , 10);
        searchQue.length > 0 && setResults(res)
        console.log(res) 
  }  
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchQue}
              onChange={(e) => {
                setSearchQue(e.target.value)
                searchFunc()
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
               results.map((result) => {
                 return result !== 'undefined' && (<li key={result.id}>
                  <div className="book">
                   <div className="book-top">
                   <div
                     className="book-cover"
                     style={{
                       width: 128,
                       height: 192,
                       backgroundImage:
                         `url(${result.imageLinks ? result.imageLinks.smallThumbnail : ''})`,
                     }}
                   ></div>
                    <BookShelfGhanger book={result} changeShelf={changeShelf}/>
                   </div>
                   <div className="book-title">{result.title}</div>
                 <div className="book-authors">{result.authors.map((author => <p key={author}>{`< ${author} >`}</p>))}</div>
                 </div>
                </li>)
              })
            }
          </ol>
        </div>
      </div>
    );
}

export default Search;