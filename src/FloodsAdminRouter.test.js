import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
//import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import FloodsAdminRouter from './FloodsAdminRouter';
import Public from './Public';

it('renders routes', () => {
  // const wrapper = mount(<FloodsAdminRouter />);
  // console.log(wrapper.html());
  const tree = ReactTestUtils.renderIntoDocument(<FloodsAdminRouter />);
  // console.log(tree);
  const router = ReactTestUtils.scryRenderedComponentsWithType(tree, Route);
  // console.log(router);
  router.forEach(function(route) {
    console.log("yip");
    console.log(route.props);
  });

  // const pathMap = ReactTestUtils.scryRenderedComponentsWithType(tree, Route).reduce((blarg) => {
  //   // const routeProps = route.props();
  //   // pathMap[routeProps.path] = routeProps.component;
  //   console.log("yip");
  //   console.log(blarg);
  //   return blarg;
  // }, {});

  // const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
  //   const routeProps = route.props();
  //   pathMap[routeProps.path] = routeProps.component;
  //   return pathMap;
  // }, {});

  // console.log(pathMap);
  // var blarg = pathMap['/protected'];
  // console.log(blarg);

  // expect(pathMap['/public']).toBe(Public);
});
