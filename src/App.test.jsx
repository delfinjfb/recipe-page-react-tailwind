import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  );

beforeEach(() => {
  // jsdom does not implement scrolling; RecipeCard scrolls to top on load.
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

test('redirects / to the omelette recipe', () => {
  renderAt('/');
  expect(
    screen.getByRole('heading', { name: 'Simple Omelette Recipe' }),
  ).toBeInTheDocument();
});

test('shows a not-found message for an unknown recipe code', () => {
  renderAt('/recipes/unknown');
  expect(screen.getByText('Recipe not found.')).toBeInTheDocument();
});
