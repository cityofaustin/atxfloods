import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { mount } from 'enzyme';
import FloodsAdminRouter from './FloodsAdminRouter';
import Public from './Public';

it('renders routes', () => {
  const wrapper = mount(<FloodsAdminRouter />);

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  console.log(pathMap);
  var blarg = pathMap['/protected'];
  console.log(blarg);

  expect(pathMap['/public']).toBe(Public);
});
