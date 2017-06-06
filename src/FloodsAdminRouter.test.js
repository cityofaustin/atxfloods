import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
// import { mount } from 'enzyme';
// import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import FloodsAdminRouter from './FloodsAdminRouter';
import Public from './Public';

it('renders routes', () => {
  // const wrapper = mount(<FloodsAdminRouter />);
  // console.log(wrapper.html());
  // const tree = ReactTestUtils.renderIntoDocument(<FloodsAdminRouter />);
  // // console.log(tree);
  // const routes = ReactTestUtils.scryRenderedComponentsWithType(tree, Route);
  // // console.log(routes);
  // routes.forEach(function(route) {
  //   console.log("yip");
  //   console.log(toJson(route.props);
  //   console.log(route.props.render ? route.props.render.toString() : null)
  // });

  const tree = renderer.create(<FloodsAdminRouter />).toJSON();
  expect(tree).toMatchSnapshot();
  // console.log(component.toJSON().children);
  // console.log(component.toJSON());

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
