import React from 'react';
import './LangButton.css';

export default class NoteTitle extends React.Component {
  render() {
    return (
      <button className="langbutton">
        {this.props.value}
      </button>
    );
  }
}
