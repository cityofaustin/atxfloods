import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Route } from 'react-router';
import { mount } from 'enzyme';
import PrivateRoute from './PrivateRoute';
import Protected from './Protected';

// const { JSDOM } = jsdom;

it('renders routes', () => {
  const wrapper = mount(<Router><PrivateRoute path="/protected" component={Protected} authenticated={true}/></Router>);
  console.log(wrapper.html());

  const wrapper2 = mount(<Router><PrivateRoute path="/protected" component={Protected} authenticated={false}/></Router>);
  console.log(wrapper2.html());

  // const dom = new JSDOM(<Router><PrivateRoute path="/protected" component={Protected} authenticated={true}/></Router>);
  // console.log(dom);

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  console.log(pathMap);
});
