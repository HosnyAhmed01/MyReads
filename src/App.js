import "./App.css";
import { useEffect, useState } from "react";
import * as bookapi from './BooksAPI';
import CurrentReading from "./componants/CurrentReads";
import WantToRead from "./componants/WantToRead";
import Read from "./componants/Read";
import Search from "./componants/Search";
import { Link, Route, Routes } from "react-router-dom";
function App() {

  const [AllBooks , SetBook] = useState([]);

  useEffect(() => {
      const getAllBooks = async () => {
          const books = await bookapi.getAll();
          SetBook(books)
      }

      getAllBooks()
  } , []); 

  const handelBookShelf = async(object , newShelf) => {

    const newArray = AllBooks.filter(e => e !== object); 
    
    SetBook([...newArray, {...object , shelf : newShelf}])
    bookapi.update(object , newShelf)
    console.log(AllBooks)
  }

  return (
    <div className="app">
        <Routes>
          <Route excat path="/search" element={
          <Search />
          }/>
          <Route excat path="/" element={
               <div className="list-books">
               <div className="list-books-title">
                 <h1>MyReads</h1>
               </div>
               <div className="list-books-content">
                 <div>
                   <CurrentReading allbooks={AllBooks.filter(book=> book.shelf === "currentlyReading")} changeShelf={handelBookShelf}/>  
                   <WantToRead allbooks={AllBooks.filter(book=> book.shelf === "wantToRead")} changeShelf={handelBookShelf}/>
                   <Read allbooks={AllBooks.filter(book=> book.shelf === "read")} changeShelf={handelBookShelf} />
                 </div>
               </div>
               <div className="open-search">
                 <Link to='/search'>Add a book</Link>
               </div>
             </div>
          } />
        </Routes>
    </div>
  );
}

export default App;