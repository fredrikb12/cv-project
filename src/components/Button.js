/* eslint-disable no-useless-constructor */
import React from "react";

function Button({ type, text, onClick, classNames, id }) {
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

export default Button;
