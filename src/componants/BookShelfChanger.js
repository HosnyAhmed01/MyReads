const BookShelfGhanger = ({book , changeShelf }) => {
  // console.log(book)

  return (
    <div className="book-shelf-changer">
      <select onChange={(e) => { 
        changeShelf(book , e.target.value) 
        console.log(book , e.target.value)
    }}>
        <option value="none" >
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none" defaultValue>None</option>
      </select>
    </div>
  );
};

export default BookShelfGhanger;
