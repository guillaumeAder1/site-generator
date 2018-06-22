import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/sections/header';


test('HEader init test', () => {
    const component = renderer.create(
        <Header />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});