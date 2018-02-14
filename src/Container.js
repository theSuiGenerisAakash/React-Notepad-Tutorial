import React from 'react';
import './Container.css';
import NoteTitle from './NoteTitle';
import LangButton from './LangButton';
import TasksTitle from './TasksTitle';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <NoteTitle value="Note Title" />
          <LangButton value="en" />
        </div>
        <TasksTitle />
      </div>
    );
  }
}
