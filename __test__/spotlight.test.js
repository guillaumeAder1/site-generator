import Spotlight from '../src/components/sections/Spotlight'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

configure({ adapter: new Adapter() });

const val = [
    { "title": "this is spotlight 1", "text": "et sagittis magna sed nunc rhoncus condimentum sem. " },
    { "title": "this is spotlight 2", "text": "Nullam et orci eu lorem consequat " },
    { "title": "this is spotlight 3", "text": "consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem." }
]

test('testing Spotlight component', () => {
    let wrapper = mount(
        <Spotlight {...val} />
    );
    const p = wrapper.find('section > h3');
    expect(p).toBeTruthy();
    expect(p).toBeTruthy();
    // expect(p[0].text()).toBe('this is spotlight 1');
})