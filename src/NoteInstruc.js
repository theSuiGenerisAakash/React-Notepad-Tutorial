import React from 'react';
import './NoteInstruc.css';

export default class NoteInstruc extends React.Component {
  render() {
    return (
      <div className="noteinstruc">
        <em>{this.props.value}</em>&nbsp;&nbsp;
        <i className="material-icons">content_paste</i>
      </div>
    );
  }
}
