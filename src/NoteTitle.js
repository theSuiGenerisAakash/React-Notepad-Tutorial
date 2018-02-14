import React from 'react';
import './NoteTitle.css';

export default class NoteTitle extends React.Component {
  render() {
    return (
      <span className="notetitle">
        {this.props.value}
      </span>
    );
  }
}
