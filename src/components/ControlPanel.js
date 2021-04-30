import React, { Component } from "react";

class ControlPanel extends Component {
  constructor() {
    super();

    this.state = {
      assetTagInputValue: "",
      locationInputValue: "",
      userInputValue: "",
      endOfLifeInputValue: "",
      purchaseDateInputValue: "",
      purchasePriceInputValue: "",
      modelInputValue: "",
      typeInputValue: "",
      serialNumberInputValue: "",
      commentsInputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Asset Tag"
          value={this.state.assetTagInputValue}
          name="assetTagInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Location"
          value={this.state.locationInputValue}
          name="locationInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Purchase Date"
          value={this.state.purchaseDateInputValue}
          name="purchaseDateInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Model"
          value={this.state.modelInputValue}
          name="modelInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Serial Number"
          value={this.state.serialNumberInputValue}
          name="serialNumberInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="User"
          value={this.state.userInputValue}
          name="userInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="End of Life"
          value={this.state.endOfLifeInputValue}
          name="endOfLifeInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Purchase Price"
          value={this.state.purchasePriceInputValue}
          name="purchasePriceInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Type"
          value={this.state.typeInputValue}
          name="typeInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Comments"
          value={this.state.commentsInputValue}
          name="commentsInputValue"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <button>Add</button>
        <button>Find</button>
      </div>
    );
  }
}

export default ControlPanel;
