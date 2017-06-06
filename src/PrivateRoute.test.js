import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Route } from 'react-router';
import { mount } from 'enzyme';
import PrivateRoute from './PrivateRoute';
import Protected from './Protected';

it('renders routes', () => {
  const wrapper = mount(<Router><PrivateRoute path="/protected" component={Protected}/></Router>);
  console.log(wrapper);

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  console.log(pathMap);
});
