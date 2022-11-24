import "./App.css";
import { useEffect, useState } from "react";
import * as bookapi from './BooksAPI';
import BookShelf from "./componants/BookShelf";
import NotFound from "./componants/NotFound";
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
  }

  return (
    <div className="app">
        <Routes>
          <Route excat path="/search" element={
          <Search changeShelf={handelBookShelf}/>
          }/>
          <Route path="*" element={<NotFound />} />
          <Route excat path="/" element={
               <div className="list-books">
               <div className="list-books-title">
                 <h1>MyReads</h1>
               </div>
               <div className="list-books-content">
                 <div>
                   <BookShelf 
                   allbooks={AllBooks.filter(book=> book.shelf === "currentlyReading")} 
                   changeShelf={handelBookShelf}
                   bookShelfName='Currently reading'
                   />  

                   <BookShelf 
                   allbooks={AllBooks.filter(book=> book.shelf === "wantToRead")} 
                   changeShelf={handelBookShelf}
                   bookShelfName='want To Read'
                   />

                   <BookShelf
                   allbooks={AllBooks.filter(book=> book.shelf === "read")} 
                   changeShelf={handelBookShelf}
                   bookShelfName='read'
                   />
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
