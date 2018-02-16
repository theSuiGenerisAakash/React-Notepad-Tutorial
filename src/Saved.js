import React from 'react';
import SavedTitle from './SavedTitle';
import SavedNote from './SavedNote';

export default class Saved extends React.Component {
  render() {
    return (
      <div className="saved">
        <SavedTitle title={this.props.title} />
        <SavedNote note={this.props.note} />
      </div>
    );
  }
}
