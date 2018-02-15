import React from 'react';
import './TasksTitle.css';

export default class TasksTitle extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="taskstitle"
        value={this.props.title}
        onChange={event => this.props.getTitle(event)}
      />
    );
  }
}
