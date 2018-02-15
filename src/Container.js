import React from 'react';
import './Container.css';
import NoteTitle from './NoteTitle';
import LangButton from './LangButton';
import TasksTitle from './TasksTitle';
import NoteInstruc from './NoteInstruc';
import TaskBox from './TaskBox';
import SaveBtn from './SaveBtn';
import NoOfChars from './NoOfChars';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remChars: 120,
      maxChars: 120,
    };
  }

  countChars = (event) => {
    this.setState({ remChars: this.state.maxChars - event.target.value.length });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <NoteTitle value="Note Title" />
          <LangButton value="en" />
        </div>
        <TasksTitle />
        <NoteInstruc value="Please type your note below" />
        <TaskBox countChars={this.countChars} maxLength={this.state.maxChars} />
        <div className="row">
          <SaveBtn />
          <NoOfChars value={this.state.remChars} />
        </div>
      </div>
    );
  }
}
