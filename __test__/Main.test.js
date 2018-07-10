import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../src/components/main';

describe('Main component', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })
    test("Build HTML: no valid input data ", () => {
        // const wrapper = shallow(
        //     <Main />
        // );
        let t = new Main()

        expect(t.log('ok')).toEqual('ok')

        //let main = component.toJSON();
        // expect(component.buildHtml()).toBe(false)
    });

})
// https://www.sitepoint.com/test-react-components-jest/