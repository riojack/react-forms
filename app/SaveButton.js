import React from 'react';

class SaveButton extends React.Component {
  render() {
    return <div>
      <button onClick={this.props.onSave}>Save</button>
    </div>;
  }
}

export default SaveButton;
