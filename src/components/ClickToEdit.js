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
    if (!this.props.blockEdits)
      this.setState({ editing: true });
  }

  handleInput(e) {
    e.preventDefault();
    const orig = this.state.text;
    let text = e.target.value;
    if (this.props.preInputProcessor)
      text = this.props.preInputProcessor(orig, text)
    this.setState({ text });
    if (this.props.handleChange)
      this.props.handleChange(orig, text);
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = this.state.text;
    if (this.props.preSubmitProcessor)
      text = this.props.preSubmitProcessor(text);
    this.setState({ text, editing: false });
    if (this.props.handleSubmit)
      this.props.handleSubmit(text);
  }

  getRender() {
    if (this.state.editing)
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
            autoFocus
          />
        </form>
      );
    return (
      <p
        className={this.props.textClass}
        style={this.props.textStyle}
        onClick={this.handleClick}
      >{this.state.text}</p>
    );
  }

  render() {
    return this.getRender();
  }
};

export default ClickToEdit;