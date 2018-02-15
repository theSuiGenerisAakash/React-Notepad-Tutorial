import React from 'react';
import './TaskBox.css';

export default class TaskBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'taskbox',
    };
  }
  handleChange(event) {
    const len = event.target.value.length;
    if (len === this.props.maxLength) {
      this.setState({ class: 'taskbox-error' });
    } else {
      this.setState({ class: 'taskbox' });
    }
  }
  render() {
    return (
      <textarea
        maxLength={this.props.maxLength}
        className={this.state.class}
        value={this.props.note}
        onChange={(event) => {
        this.handleChange(event);
        this.props.countNoteChars(event);
        }
      }
      />
    );
  }
}
