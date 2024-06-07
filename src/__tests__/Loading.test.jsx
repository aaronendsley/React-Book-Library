import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Loading from '../components/Loading';

test('displays the 📖 emoji', async () => {
  const loading = render(<Loading />);

  const P = await loading.findByTestId('loader');

  expect(P.innerText).toContain('📖');
  loading.unmount();
});
