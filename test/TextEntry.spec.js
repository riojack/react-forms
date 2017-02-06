import TextEntry from '../app/TextEntry';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {stub, assert} from 'sinon';

describe('Text entry tests', () => {
    let props,
        element;

    beforeEach(() => {
        props = {
            onTextChange: stub()
        };

        element = shallow(<TextEntry {...props} />);
    });

    it('should be a div', () => {
       expect(element.type()).to.equal('div');
    });

    it('should contain one child that is an input element with a "type" attribute of "text"', () => {
        let children = element.children(),
            firstChild = children.first();

        expect(children).to.have.length(1);
        expect(firstChild.type()).to.equal('input');
        expect(firstChild.props()).to.have.property('type')
            .that.equals('text');
    });

    it('should call props.onChange with the field\'s text when the input receives an onChange event', () => {
        let input = element.children().first(),
            typedText = 'foo-bar',
            fakeEvent = {
                target: {
                    value: typedText
                }
            };

        input.simulate('change', fakeEvent);

        assert.calledWithExactly(props.onTextChange, typedText);
    });
});