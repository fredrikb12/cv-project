/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, onSubmit, name, email, phone } = this.props;
    return (
      <form
        id="general-form"
        className="form"
        onChange={handleChange}
        onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" onChange={handleChange} value={name} />
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
  }
}

export default GeneralInfo;
