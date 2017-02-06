import DataEntryApp from '../app/DataEntryApp';
import TextEntry from '../app/TextEntry';
import SaveButton from '../app/SaveButton';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {stub, assert} from 'sinon';

describe('Data entry app tests', () => {
  let props,
    element;

  beforeEach(() => {
    props = {
      onTextChange: stub(),
      onSave: stub()
    };
    element = shallow(<DataEntryApp {...props} />);
  });

  it('should be a div', () => {
    expect(element.type()).to.equal('div');
  });

  it('should have two children, a TextEntry element followed by SaveButton element', () => {
    let children = element.children();

    expect(children).to.have.length(2);

    expect(children.at(0).type()).to.equal(TextEntry);
    expect(children.at(1).type()).to.equal(SaveButton);
  });

  it('should pass props.onTextChange to the TextEntry component', () => {
    let textEntryElement = element.children(TextEntry);

    expect(textEntryElement.props()).to.have.property('onTextChange')
      .that.equals(props.onTextChange);
  });

  it('should pass props.onSae to the SaveButton component', () => {
    let saveButtonElement = element.children(SaveButton);

    expect(saveButtonElement.props()).to.have.property('onSave')
      .that.equals(props.onSave);
  });
});
