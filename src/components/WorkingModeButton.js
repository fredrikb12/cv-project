/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Button from "./Button";

class WorkingModeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick, workingMode } = this.props;
    const text = workingMode
      ? "Switch to preview mode"
      : "Switch to working mode";
    return (
      <div id="working-button-container">
        <Button
          text={text}
          type="button"
          onClick={onClick}
          id={"working-mode-button"}
        />
      </div>
    );
  }
}

export default WorkingModeButton;
