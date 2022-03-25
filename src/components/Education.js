/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

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
            <h2>{item.school}</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3>{item.program}</h3>
              <h5 style={{ color: "grey" }}>{item.date}</h5>
            </div>
            <button
              className="button delete-button"
              onClick={(e) => onDeleteClick(e, item.id, "education")}
            >
              Delete
            </button>
            <button
              className="button edit-button"
              onClick={(e) => onEditClick(e, item.id, "education-edit")}
            >
              Edit{" "}
              {item.school.length > 15
                ? item.school.slice(0, 15) + "..."
                : item.school}
            </button>
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
