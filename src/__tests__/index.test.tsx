import {render, screen} from '@testing-library/react';

import IndexPage from '@/../pages';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('index should contain Hello World!', () => {
  useRouter.mockImplementationOnce(() => ({
    pathname: '/',
  }));
  render(<IndexPage />);
  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
