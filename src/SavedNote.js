import React from 'react';
import './SavedNote.css';

export default class SaveBtn extends React.Component {
  render() {
    return (
      <textarea
        className="SavedNote-labeltype"
        value={this.props.note}
        disabled
      />
    );
  }
}
