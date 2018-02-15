import React from 'react';
import './Container.css';
import NoteTitle from './NoteTitle';
import LangButton from './LangButton';
import TasksTitle from './TasksTitle';
import NoteInstruc from './NoteInstruc';
import TaskBox from './TaskBox';
import SaveBtn from './SaveBtn';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <NoteTitle value="Note Title" />
          <LangButton value="en" />
        </div>
        <TasksTitle />
        <NoteInstruc value="Please type your note below" />
        <TaskBox />
        <div className="row">
          <SaveBtn />
        </div>
      </div>
    );
  }
}
