import Spotlight from '../src/components/sections/Spotlight'
import React from 'react';

const val = [
    { "title": "this is spotlight 1", "text": "et sagittis magna sed nunc rhoncus condimentum sem." },
    { "title": "this is spotlight 2", "text": "Nullam et orci eu lorem consequat" },
    { "title": "this is spotlight 3", "text": "consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem." }
]

describe('testing Spotlight component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Spotlight params={val} />
        );
    })

    test('component mount', () => {

        expect(wrapper.props().params).toBeTruthy()
        expect(wrapper.props().params).toHaveLength(3)
        expect(wrapper).toMatchSnapshot()
    })

    test('component has expected values mapped to DOM', () => {
        const section = wrapper.find('section')
        const h3 = wrapper.find('h3')
        const p = wrapper.find('p')
        // title props
        expect(wrapper.props().params[0].title).toEqual('this is spotlight 1');
        expect(wrapper.props().params[1].title).toEqual('this is spotlight 2');
        expect(wrapper.props().params[2].title).toEqual('this is spotlight 3');
        // DOM creation
        expect(section).toHaveLength(3)
        expect(h3).toHaveLength(3)
        expect(p).toHaveLength(3)
        // DOM element has props values
        expect(h3.at(0).text()).toEqual('this is spotlight 1')
        expect(h3.at(1).text()).toEqual('this is spotlight 2')
        expect(h3.at(2).text()).toEqual('this is spotlight 3')
        // same for text in <p>
        expect(p.at(2).text()).toEqual('consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.')
    })



})