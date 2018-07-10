import React from 'react';
import Header from '../src/components/sections/header';


describe('Header component', () => {
    const val = { title: "this is a header", text: "header text" }

    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Header params={val} />
        );
    });

    test('props are passed', () => {
        expect(wrapper.props()).toBeTruthy()
        expect(wrapper.props().params.title).toEqual('this is a header')
        expect(wrapper.props().params.text).toEqual('header text')
        expect(wrapper).toMatchSnapshot()

    })

}); 