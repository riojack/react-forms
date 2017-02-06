import React from 'react';
import TextEntry from './TextEntry';
import SaveButton from './SaveButton';

class DataEntryApp extends React.Component {
    render() {
        return <div>
            <TextEntry onTextChange={this.props.onTextChange} />
            <SaveButton onSave={this.props.onSave} />
        </div>;
    }
}

export default DataEntryApp;