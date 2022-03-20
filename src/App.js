import React, { Component } from "react";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "",
        email: "",
        phone: "",
      },
      education: {
        item: {
          school: "",
          program: "",
          date: "",
          id: uniqid(),
        },
        items: [],
      },
      experience: {},
      isEditingGen: false,
      isEditingEdu: false,
      isEditingExp: false,
    };

    this.onSubmitGeneral = this.onSubmitGeneral.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.onSubmitExperience = this.onSubmitExperience.bind(this);

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);

    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onEditClick = (e) => {
    if (e.target.id === "general-edit") {
      this.setState({ isEditingGen: true });
    } else if (e.target.id === "education-edit") {
      this.setState({ isEditingEdu: true });
    } else if (e.target.id === "experience-edit") {
      this.setState({ isEditingExp: true });
    }
  };

  onDeleteClick = (e, id) => {
    if (e.target.classList.contains("education-delete-button")) {
      const filtered = this.state.education.items.filter(
        (item) => item.id !== id
      );
      const emptyItem = { school: "", program: "", date: "", id: uniqid() };
      this.setState({ education: { items: filtered, item: emptyItem } });
      this.setState({ isEditingEdu: false });
    }
    if (e.target.classList.contains("experience-delete-button")) {
    }
  };

  onSubmitGeneral = (e) => {
    e.preventDefault();

    this.setState({ isEditingGen: false });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    const edu = this.state.education;
    const emptyItem = { school: "", program: "", date: "", id: uniqid() };
    const items = [...edu.items, edu.item];
    this.setState({ education: { items: items, item: emptyItem } });
    this.setState({ isEditingEdu: false });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();

    this.setState({ isEditingExp: false });
  };

  handleGeneralChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const current = { ...this.state.general };
    current[name] = value;

    this.setState({ general: current });
  };

  handleEducationChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const current = { ...this.state.education };
    current.item[name] = value;

    this.setState({ education: current });
    console.log(this.state.education);
  };

  handleExperienceChange = (e) => {};

  render() {
    const { isEditingGen, isEditingEdu, isEditingExp } = this.state;

    return (
      <div>
        <GeneralInfo
          handleChange={this.handleGeneralChange}
          onSubmit={this.onSubmitGeneral}
          onClick={this.onEditClick}
          name={this.state.general.name}
          email={this.state.general.email}
          phone={this.state.general.phone}
          isEditing={isEditingGen}
        />
        <Education
          handleChange={this.handleEducationChange}
          onSubmit={this.onSubmitEducation}
          school={this.state.education.item.school}
          program={this.state.education.item.program}
          date={this.state.education.item.date}
          isEditing={isEditingEdu}
          items={this.state.education.items}
          onEditClick={this.onEditClick}
          onDeleteClick={this.onDeleteClick}
        />
      </div>
    );
  }
}

export default App;
