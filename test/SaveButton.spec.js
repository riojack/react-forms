import SaveButton from '../app/SaveButton';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {stub, assert} from 'sinon';

describe('Save button tests', () => {
    let props,
        element;

    beforeEach(() => {
        props = {
            onSave: stub()
        };
        element = shallow(<SaveButton {...props} />);
    });

    it('should be a div', () => {
        expect(element.type()).to.equal('div');
    });

    it('should contain one child that is a button element', () => {
        let children = element.children(),
            button = children.first();

        expect(children).to.have.length(1);
        expect(button.type()).to.equal('button');
    });

    it('should have the text "Save" inside the button', () => {
        let button = element.children('button').first(),
            textChild = button.children().text();

        expect(textChild).to.equal('Save');
    });

    it('should call props.onSave when the button is clicked', () => {
        let button = element.children('button');

        button.simulate('click');

        assert.calledOnce(props.onSave);
    });
});