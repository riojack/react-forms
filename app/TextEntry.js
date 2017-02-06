import React from 'react';

function whenTextChanges(event) {
  this.props.onTextChange(event.target.value);
}

class TextEntry extends React.Component {
  render() {
    return <div>
      <input type="text" onChange={whenTextChanges.bind(this)}/>
    </div>;
  }
}

export default TextEntry;
