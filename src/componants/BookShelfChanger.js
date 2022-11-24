const BookShelfGhanger = ({book , changeShelf }) => {
  // console.log(book)

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf ? book.shelf : "none"} onChange={(e) => { 
        changeShelf(book , e.target.value) 
    }}>
        <option value="MoveTo" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">none</option>
      </select>
    </div>
  );
};

export default BookShelfGhanger;
