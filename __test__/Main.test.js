import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../src/components/main';


test("Build HTML: no valid input data ", () => {
    const component = renderer.create(
        <Main />
    );
    let main = component.toJSON();
    expect(component.buildHtml()).toBe(false)
})
// https://www.sitepoint.com/test-react-components-jest/