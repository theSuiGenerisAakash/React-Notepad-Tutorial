import React from 'react';
import './SaveBtn.css';

export default class SaveBtn extends React.Component {
  render() {
    return (
      <button
        className="savebtn"
        onClick={this.props.saveNote}
      >Save
      </button>
    );
  }
}
