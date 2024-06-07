import { BiSolidBookAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Book({ book }) {
  return (
    <div className="w-full md:w-52 lg:w-9/12 bg-white rounded-md border-solid border-black">
      <h3
        data-testid="title"
        className="text-center font-black text-2xl underline pb-3"
      >
        {book.title}
      </h3>
      <BiSolidBookAlt
        data-testid="book"
        className="ml-auto mr-auto"
        size={'4rem'}
        alt={`Cover art of ${book.title}`}
      />
      <p
        data-testid="author"
        className="text-center"
      >{`Author: ${book.author}`}</p>
      <Link to={`/book/${book.id}`}>
        <button
          data-testid="callToAction"
          className="bg-black rounded text-white ml-auto mr-auto mb-2 block w-2/4"
        >{`Learn More`}</button>
      </Link>
    </div>
  );
}
