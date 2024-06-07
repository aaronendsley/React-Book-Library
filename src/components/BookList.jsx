import Book from './Book';
import Loading from './Loading';

function BookList({ books }) {
  function displayBooks() {
    if (books === '') {
      return <Loading />;
    } else {
      return (
        <BookContainer>
          {books.map((book) => (
            <Book key={book.isbn} book={book} />
          ))}
        </BookContainer>
      );
    }
  }

  function BookContainer({ children }) {
    return (
      <div
        id="book-container"
        className="ml-auto mr-auto mt-9 lg:w-11/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10"
      >
        {children}
      </div>
    );
  }

  return (
    <div
      id="content"
      className="mt-2 bg-white w-9/12 ml-auto mr-auto rounded-md"
    >
      <h2 className="text-black text-4xl font-black text-center">Books</h2>
      <p className="text-black text-center underline">
        Below you will find a list of books in our library. Select a Book to
        learn more
      </p>
      {displayBooks()}
    </div>
  );
}

export default BookList;
