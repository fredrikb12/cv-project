import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "",
        email: "",
        number: "",
      },
      education: {},
      experience: {},
    };

    this.onSubmitGeneral = this.onSubmitGeneral.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.onSubmitExperience = this.onSubmitExperience.bind(this);

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  onSubmitGeneral = (e) => {};

  onSubmitEducation = (e) => {};

  onSubmitExperience = (e) => {};

  handleGeneralChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const current = { ...this.state.general };
    current[name] = value;

    this.setState({ general: current });
    console.log(this.state.general);
  };

  handleEducationChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ item: { [name]: value } });
    console.log(this.state.education.item);
  };

  handleExperienceChange = (e) => {};

  render() {
    return (
      <div>
        <GeneralInfo
          handleChange={this.handleGeneralChange}
          onSubmit={this.onSubmitGeneral}
        />
      </div>
    );
  }
}

export default App;
