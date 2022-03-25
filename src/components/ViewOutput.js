/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import EducationView from "./EducationView";
import ExperienceView from "./ExperienceView";
import GeneralInfo from "./GeneralInfo";

class ViewOutput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, phone, email } = this.props.generalInfo;
    return (
      <div id="main-container" className="output-container">
        <GeneralInfo
          name={name}
          email={email}
          phone={phone}
          isEditing={this.props.isEditing}
          workingMode={this.props.workingMode}
        />

        <EducationView items={this.props.educationItems} />
        <ExperienceView items={this.props.experienceItems} />
      </div>
    );
  }
}

export default ViewOutput;
