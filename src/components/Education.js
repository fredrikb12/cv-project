/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Button from "./Button";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, editItem, onDeleteClick, onEditClick } = this.props;
    if (items.length > 0 && items[0].id !== editItem.id) {
      const itemsToRender = items.map((item) => {
        if (!item) return null;
        if (item.id === editItem.id) return null;
        return (
          <div
            key={item.id}
            style={{ borderBottom: "1px solid black", marginBottom: "20px" }}
          >
            <h2 className="section-subheader">{item.school}</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3>{item.program}</h3>
              <h5 style={{ color: "grey" }}>{item.date}</h5>
            </div>
            <Button
              type={"Button"}
              classNames={"delete-button"}
              onClick={(e) => onDeleteClick(e, item.id, "education")}
              text={"Delete"}
            />
            <Button
              type={"button"}
              classNames={"edit-button"}
              onClick={(e) => onEditClick(e, item.id, "education-edit")}
              text={"Edit"}
            />
          </div>
        );
      });
      return (
        <div>
          <h1
            className="section-header"
            style={{ borderBottom: "1px solid black", width: "400px" }}
          >
            Education
          </h1>
          {itemsToRender}
        </div>
      );
    }
    return (
      <div>
        <h1
          className="section-header"
          style={{ borderBottom: "1px solid black", width: "400px" }}
        >
          Education
        </h1>
      </div>
    );
  }
}

export default Education;
