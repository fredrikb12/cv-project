/* eslint-disable no-useless-constructor */
import React from "react";
import Button from "./Button";

function WorkingModeButton({ onClick, workingMode }) {
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

export default WorkingModeButton;
