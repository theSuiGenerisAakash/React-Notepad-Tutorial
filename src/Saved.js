import React from 'react';
import SavedTitle from './SavedTitle';
import SavedNote from './SavedNote';
import './Saved.css';

export default class Saved extends React.Component {
  triggerGiveMyID = () => {
    this.props.giveMyID(this.props.obj.id);
  }
  render() {
    return (
      <button
        className="Saved-button"
        onClick={this.triggerGiveMyID}
      >
        <SavedTitle title={this.props.obj.title} />
        <SavedNote note={this.props.obj.note} />
      </button>
    );
  }
}
