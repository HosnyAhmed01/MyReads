import Book from "./Book";

const CurrentReading = ({ allbooks , changeShelf , bookShelfName}) => {

   return (
    <div className="bookshelf">
       <h2 className="bookshelf-title">{bookShelfName}</h2>
       <div className="bookshelf-books">
       <ol className="books-grid">
        {
          allbooks.map((book) => {
             return (
               <Book book={book} changeShelf={changeShelf} key={book.id}/>
              )
          }) 
        }
       </ol>
       </div>
    </div>
   );
}



export default CurrentReading;