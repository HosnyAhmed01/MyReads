import BookShelfGhanger from "./BookShelfChanger";
const Read = ({allbooks , changeShelf}) => {
  return (
    <div className="bookshelf">
       <h2 className="bookshelf-title">Read</h2>
       <div className="bookshelf-books">
       <ol className="books-grid">
        {
          allbooks.map((book) => {
             return (
                <li key={book.id}>
                <div className="book">
                 <div className="book-top">
                 <div
                   className="book-cover"
                   style={{
                     width: 128,
                     height: 192,
                     backgroundImage:
                       `url(${book.imageLinks.smallThumbnail})`,
                   }}
                 ></div>
                  <BookShelfGhanger book={book} changeShelf={changeShelf} />
                 </div>
                 <div className="book-title">{book.title}</div>
               <div className="book-authors">{book.authors.map((author => <p key={author}>{`< ${author} >`}</p>))}</div>
               </div>
              </li>
              )
          }) 
        }
       </ol>
       </div>
    </div>
   );
}


export default Read;