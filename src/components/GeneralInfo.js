/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Button from "./Button";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleChange,
      onSubmit,
      onClick,
      name,
      email,
      phone,
      isEditing,
      workingMode,
    } = this.props;
    if (isEditing && workingMode) {
      return (
        <form id="general-form" className="form">
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
          <Button
            type={"submit"}
            classNames={"submit-button"}
            id={"submit-general"}
            onClick={onSubmit}
            text={"Submit"}
          />
        </form>
      );
    } else if (workingMode && !isEditing) {
      return (
        <div className="general-info">
          <h1 className="section-header">Name: {name}</h1>
          <h2 className="section-subheader">Email: {email}</h2>
          <h2 className="section-subheader">Phone Number: {phone}</h2>
          <Button
            classNames={"add-button"}
            id={"general-edit"}
            onClick={(e) => onClick(e, null, "general-edit")}
            text={"Edit General Info"}
            type={"button"}
          />
        </div>
      );
    } else {
      return (
        <div className="general-info output-view-section">
          <h1 style={{ textAlign: "center" }} className="section-header">
            {name}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "15px",
            }}
          >
            <h2 className="section-subheader">{email}</h2>
            <h2 className="section-subheader">{phone}</h2>
          </div>
        </div>
      );
    }
  }
}

export default GeneralInfo;
