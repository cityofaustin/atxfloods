import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { shallow } from 'enzyme';
import FloodsAdminRouter from './FloodsAdminRouter';
import Public from './Public';

it('renders routes', () => {
  const wrapper = shallow(<FloodsAdminRouter />);

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap['/public']).toBe(Public);
});
