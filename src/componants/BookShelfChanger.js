const BookShelfGhanger = ({book , changeShelf }) => {
  // console.log(book)

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf ? book.shelf : "none"} onChange={(e) => { 
        changeShelf(book , e.target.value) 
    }}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="remove">remove</option>
      </select>
    </div>
  );
};

export default BookShelfGhanger;
