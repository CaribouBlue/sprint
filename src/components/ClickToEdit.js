import React from 'react';
import autoBind from '../lib/react-binder';

class ClickToEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      text: this.props.text,
    };

    autoBind(this, 'handleClick', 'handleInput', 'handleSubmit');
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ editing: true });
  }

  handleInput(e) {
    e.preventDefault();
    const orig = this.state.text;
    let text = e.target.value;
    if (this.props.preInputProcesser)
      text = this.props.preInputProcesser(text)
    this.setState({ text });
    if (this.props.handleChange)
      this.props.handleChange(orig, text);
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = this.state.text;
    if (this.props.preSubmitProcesser)
      text = this.props.preSubmitProcesser(text);
    this.setState({ text, editing: false });
    if (this.props.handleSubmit)
      this.props.handleSubmit(text);
  }

  getRender() {
    if (!this.state.editing)
      return (
        <p
          className={this.props.textClass}
          onClick={this.handleClick}
        >{this.state.text}</p>
      );
    return (
      <form
        className={this.props.formClass}
        onSubmit={this.handleSubmit}
      >
        <input
          className={this.props.inputClass}
          onChange={this.handleInput}
          value={this.state.text}
          type="text"
        />
      </form>
    );
  }

  render() {
    return this.getRender();
  }
};

export default ClickToEdit;