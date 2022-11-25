import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as bookapi from '../BooksAPI';
import Book from "./Book";
const Search = ({changeShelf , allbooks}) => {
  const [searchQue , setSearchQue] = useState('');
  const [results , setResults] = useState([]); 

  const contRef = useRef();
  const searchFunc = async() => {
    if (contRef.current) {
      contRef.current.abort();
      }
      const controller = new AbortController();
      contRef.current = controller;
      try {
        const res = await bookapi.search(searchQue , 10);
        if (searchQue.length > 0 && res !== undefined) {
          setResults(res)
          contRef.current = null;
        } else {
          setResults([])
        }
      } catch (e) {

      }
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
                console.log(results)            
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              results !== "undefiend" && results.length > 0 && results.map((result) => {

                const bookOnShelf = allbooks.find(b => b.id === result.id)
                if (bookOnShelf) {
                  result.shelf = bookOnShelf.shelf
                   }
                 return (<Book book={result} changeShelf={changeShelf} key={result.id}/>)
              })
            }
          </ol>
        </div>
      </div>
    );
}



export default Search;