import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import Book from '../components/Book';

const bookData = {
  title: 'The Wizard of Oz',
  author: 'L. Frank Baum'
};

test('component has a title in the H3 field', async () => {
  const book = render(
    <StaticRouter>
      <Book book={bookData} />
    </StaticRouter>
  );

  const H3 = await book.findByTestId('title');

  expect(H3.innerText).toContain(bookData.title);
  book.unmount();
});

test('component renders an author', async () => {
  const book = render(
    <StaticRouter>
      <Book book={bookData} />
    </StaticRouter>
  );
  const P = await book.findByTestId('author');
  expect(P.innerText).toContain(bookData.author);
  book.unmount();
});
