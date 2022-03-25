/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ExperienceView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <div className="output-view-section">
        <h1 className="section-header bottom-border">Experience</h1>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid black",
                marginBottom: "20px",
                paddingBottom: "10px",
              }}
            >
              <h2 className="section-subheader">{item.company}</h2>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <h3>{item.position}</h3>
                <h5 style={{ color: "grey" }}>{item.date}</h5>
              </div>
              <p style={{ fontStyle: "italic", opacity: "0.8" }}>
                {item.tasks}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceView;
