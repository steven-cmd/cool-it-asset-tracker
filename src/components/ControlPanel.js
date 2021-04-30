import React, { Component } from "react";

class ControlPanel extends Component {
  constructor() {
    super();

    this.state = {
      assetTag: "",
      location: "",
      user: "",
      endOfLife: "",
      purchaseDate: "",
      purchasePrice: "",
      model: "",
      type: "",
      serialNumber: "",
      comments: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(value, name) {
    this.setState({ [name]: value });
  }

  handleClear() {
    this.setState({
      assetTag: "",
      location: "",
      user: "",
      endOfLife: "",
      purchaseDate: "",
      purchasePrice: "",
      model: "",
      type: "",
      serialNumber: "",
      comments: "",
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Asset Tag"
          value={this.state.assetTag}
          name="assetTag"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Location"
          value={this.state.location}
          name="location"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Purchase Date"
          value={this.state.purchaseDate}
          name="purchaseDate"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Model"
          value={this.state.model}
          name="model"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Serial Number"
          value={this.state.serialNumber}
          name="serialNumber"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="User"
          value={this.state.user}
          name="user"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="End of Life"
          value={this.state.endOfLife}
          name="endOfLife"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Purchase Price"
          value={this.state.purchasePrice}
          name="purchasePrice"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Type"
          value={this.state.type}
          name="type"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Comments"
          value={this.state.comments}
          name="comments"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <button onClick={() => this.props.handleAddItem(this.state)}>
          Add
        </button>
        <button onClick={() => this.props.handleFind(this.state)}>Find</button>
        <button
          onClick={() => {
            this.handleClear();
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default ControlPanel;
