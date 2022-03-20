/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input name="name" type="text" onChange={this.props.handleChange} />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input name="phone" type="tel" onChange={this.props.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
