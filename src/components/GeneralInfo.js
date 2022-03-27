/* eslint-disable no-useless-constructor */
import React from "react";
import Button from "./Button";


function GeneralInfo({
  workingMode,
  name,
  phone,
  email,
  isEditing,
  onEditClick,
  onSubmit,
  handleChange,
}) {
  if (!workingMode) {
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
  } else if (workingMode && !isEditing) {
    return (
      <div className="general-info">
        <h1 className="section-header">Name: {name}</h1>
        <h2 className="section-subheader">Email: {email}</h2>
        <h2 className="section-subheader">Phone Number: {phone}</h2>
        <Button
          classNames={"add-button"}
          id={"general-edit"}
          onClick={(e) => onEditClick(e, null, "general-edit")}
          text={"Edit General Info"}
          type={"button"}
        />
      </div>
    );
  } else {
    return (
      <form id="general-form" className="form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            onChange={(e) => handleChange(e)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            onChange={(e) => handleChange(e)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            name="phone"
            type="tel"
            onChange={(e) => handleChange(e)}
            value={phone}
          />
        </div>
        <Button
          type={"submit"}
          classNames={"submit-button"}
          id={"submit-general"}
          onClick={(e) => onSubmit(e)}
          text={"Submit"}
        />
      </form>
    );
  }
}

export default GeneralInfo;
