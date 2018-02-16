import React from 'react';
import SavedTitle from './SavedTitle';
import SavedNote from './SavedNote';

export default class Saved extends React.Component {
  triggerGiveMyID = () => {
    this.props.giveMyID(this.props.obj.id);
  }

  render() {
    return (
      <div
        className="saved"
        onClick={this.triggerGiveMyID}
      >
        <SavedTitle title={this.props.obj.title} />
        <SavedNote note={this.props.obj.note} />
      </div>
    );
  }
}
