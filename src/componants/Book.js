import BookShelfGhanger from "./BookShelfChanger";

const Book = ({book , changeShelf}) => {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.smallThumbnail : ""
              })`,
            }}
          ></div>
          <BookShelfGhanger book={book} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? (
            book.authors.map((author) => (
              <p key={author}>{`< ${author} >`}</p>
            ))
          ) : (
            <p>Unkonwn</p>
          )}
        </div>
      </div>
    </li>
  );
};
export default Book;