import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './pages/BookDetails';
function App() {
  useEffect(() => {
    API();
  }, []);
  const [books, setBooks] = useState('');

  async function API() {
    const books = await fetch('https://fakerapi.it/api/v1/books?_quantity=50');
    const json = await books.json();
    setBooks(json.data);
  }

  return (
    <BrowserRouter>
      <div className="w-full">
        <div
          id="title"
          className="w-9/12 bg-white mr-auto ml-auto mt-4 rounded-md  h-28 flex items-center justify-center "
        >
          <h1 className="text-black text-5xl font-black text-center ">
            {`Welcome to Bob's Books`}
          </h1>
        </div>
        <Routes>
          <Route
            path="/book/:id"
            element={<BookDetails books={books} />}
          ></Route>
          <Route path="/" element={<BookList books={books} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
