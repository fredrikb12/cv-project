/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, editItem, onDeleteClick, onEditClick } = this.props;
    if (items.length > 0) {
      const itemsToRender = items.map((item, index) => {
        if (!item) return null;
        if (item.id === editItem.id) return null;
        return (
          <div
            key={item.id}
            style={{ borderBottom: "1px solid black", marginBottom: "20px" }}
          >
            <h2>{item.company}</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3>{item.position}</h3>
              <h5 style={{ color: "grey" }}>{item.date}</h5>
            </div>
            <p>{item.tasks}</p>
            <button className="button delete-button" onClick={(e) => onDeleteClick(e, item.id, "experience")}>
              Delete
            </button>
            <button className="button edit-button" onClick={(e) => onEditClick(e, item.id, "experience-edit")}>
              Edit
              {item.company.length > 15
                ? item.company.slice(0, 15) + "..."
                : item.company}
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
            Experience
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
          Experience
        </h1>
      </div>
    );
  }
}

export default Experience;
