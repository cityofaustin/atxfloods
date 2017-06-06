import React from 'react';
import ReactDOM from 'react-dom';
import { Route, MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import FloodsAdminRoutes from './FloodsAdminRoutes';
import Public from './Public';
import auth from './services/awsAuth';

jest.mock('./services/awsAuth', () => {
  return {
    isAuthenticated: jest.fn()
  }
});

it('renders the root page correctly when the user is logged out', () => {
  console.log(auth.isAuthenticated);
  auth.isAuthenticated.mockReturnValue(false);

  const tree = renderer.create(
    <MemoryRouter initialEntries={[ '/' ]}>
      <FloodsAdminRoutes />
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders the root page correctly when the user is logged in', () => {
  auth.isAuthenticated.mockReturnValue(true);

  const tree = renderer.create(
    <MemoryRouter initialEntries={[ '/' ]}>
      <FloodsAdminRoutes />
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
