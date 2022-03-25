/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, text, onClick, classNames, id } = this.props;

    return (
      <button
        type={type}
        className={(classNames ?? "") + " button"}
        id={id}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;
