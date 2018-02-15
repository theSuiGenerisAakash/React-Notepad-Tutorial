import React from 'react';
import './NoteInstruc.css';
import TaskIcon from './ic_assignment_black_24px.svg';

export default class NoteInstruc extends React.Component {
  render() {
    return (
      <div className="noteinstruc">
        <em>{this.props.value}</em>&nbsp;&nbsp;
        <img src={TaskIcon} alt="Task icon" width="3%" />
      </div>
    );
  }
}
