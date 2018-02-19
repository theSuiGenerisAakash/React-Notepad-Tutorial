import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import './Container.css';
import NoteTitle from './NoteTitle';
import LangButton from './LangButton';
import TasksTitle from './TasksTitle';
import NoteInstruc from './NoteInstruc';
import TaskBox from './TaskBox';
import SaveBtn from './SaveBtn';
import NoOfChars from './NoOfChars';
import OpenSaved from './OpenSaved';
import Saved from './Saved';
import { saveNote, editNote } from './redux/actions';

const uniqueRandom = require('unique-random');

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remChars: 120,
      maxChars: 120,
      title: '',
      note: '',
      currID: -1,
    };
  }

  getTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  saveNote = () => {
    if (this.state.title.length > 0 && this.state.note.length > 0) {
      const rand = uniqueRandom(1, 1000);
      if (this.state.currID === -1) {
        this.props.dispatchSave(rand(), this.state.title, this.state.note);
      } else {
        this.props.dispatchEdit(this.state.currID, this.state.title, this.state.note);
        this.setState({ currID: -1 });
      }
    }
    this.setState({
      title: '',
      note: '',
    });
  }

  countNoteChars = (event) => {
    this.setState({
      remChars: this.state.maxChars - event.target.value.length,
      note: event.target.value,
    });
  }

  openSaved = () => {
    this.props.changeLayout(1);
  }

  giveMyID = (id) => {
    const objRW = this.props.allNotes.find(e => e.id === id);
    this.setState({
      title: objRW.title,
      note: objRW.note,
      currID: id,
    }, () => {
      this.props.changeLayout(0);
    });
  }

  populateSavedNotes = () => {
    const savedItems = [];
    this.props.allNotes.forEach((objNote) => {
      savedItems.push(<Saved obj={objNote} key={objNote.id} giveMyID={this.giveMyID} />);
    });
    return savedItems;
  }

  render() {
    if (this.props.layout === 0) {
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
          <OpenSaved value="Open Saved Items" openSaved={this.openSaved} />
        </div>
      );
    }
    return (
      <div className="container">
        <div className="column">
          {this.populateSavedNotes()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allNotes: state.saveOrEdit,
});

const mapDispatchToProps = dispatch => ({
  dispatchSave: (id, title, note) => dispatch(saveNote(id, title, note)),
  dispatchEdit: (currID, title, note) => dispatch(editNote(currID, title, note)),
});

Container.propTypes = {
  layout: PT.number,
  allNotes: PT.arrayOf(PT.shape({
    title: PT.string,
    note: PT.string,
    id: PT.number,
  })),
  dispatchSave: PT.func,
  dispatchEdit: PT.func,
  changeLayout: PT.func,
};

Container.defaultProps = {
  layout: 0,
  allNotes: [],
  dispatchSave: () => {},
  dispatchEdit: () => {},
  changeLayout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
