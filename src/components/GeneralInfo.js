/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, onSubmit, onClick, name, email, phone, isEditing } =
      this.props;
    if (isEditing) {
      return (
        <form
          id="general-form"
          className="form"
          onChange={handleChange}
          onSubmit={onSubmit}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              name="phone"
              type="tel"
              onChange={handleChange}
              value={phone}
            />
          </div>
          <button type="submit" id="submit-general">
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <div>
          <h1>Name: {name}</h1>
          <h2>Email: {email}</h2>
          <h2>Phone Number: {phone}</h2>
          <button id="general-edit" onClick={onClick}>
            Edit General Info
          </button>
        </div>
      );
    }
  }
}

export default GeneralInfo;
