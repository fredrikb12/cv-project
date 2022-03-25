/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class WorkingModeButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick, workingMode } = this.props;
    return (
      <div id="working-button-container">
        <button className="button" onClick={onClick}>
          {workingMode
            ? "Switch to preview mode"
            : "Switch to working mode"}
        </button>
      </div>
    );
  }
}

export default WorkingModeButton;
