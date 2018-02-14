import React from 'react';
import './Container.css';
import NoteTitle from './NoteTitle';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <NoteTitle value="Note Title" />
      </div>
    );
  }
}
