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
      title: '',
      note: '',
      notes: [],
    };
  }

  getTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  saveNote = () => {
    if (this.state.title.length > 0 && this.state.note.length > 0) {
      this.setState({
        notes: [...this.state.notes, { title: this.state.title, note: this.state.note }],
        note: '',
        title: '',
      }, () => {
        console.log(this.state.notes);
      });
    }
  }

  countNoteChars = (event) => {
    this.setState({
      remChars: this.state.maxChars - event.target.value.length,
      note: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <NoteTitle value="Note Title" />
          <LangButton value="en" />
        </div>
        <TasksTitle
          getTitle={this.getTitle}
          title={this.state.title}
        />
        <NoteInstruc value="Please type your note below" />
        <TaskBox
          countNoteChars={this.countNoteChars}
          note={this.state.note}
          maxLength={this.state.maxChars}
        />
        <div className="row">
          <SaveBtn saveNote={this.saveNote} />
          <NoOfChars value={this.state.remChars} />
        </div>
      </div>
    );
  }
}
