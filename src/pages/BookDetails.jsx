import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

function BookDetails({ books }) {
  const { id } = useParams();
  if (Array.isArray(books)) {
    let currentBook = books.filter((book) => {
      if (book.id == Number(id)) {
        return book;
      }
    })[0];

    return (
      <div className="w-3/4 ml-auto mr-auto mt-5 bg-white rounded-md  p-5">
        <h2 className="font-black text-center text-lg">{currentBook.title}</h2>
        <p className="text-center">{`By: ${currentBook.author}`}</p>
        <p className="text-center">{`Description: ${currentBook.description}`}</p>
        <p className="text-center">{`ISBN: ${currentBook.isbn}`}</p>

        <Link to={'/'}>
          <button className="bg-black rounded text-white ml-auto mr-auto mb-10 block w-2/4">
            Back
          </button>
        </Link>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default BookDetails;
