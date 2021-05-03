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
    const {
      assetTag,
      location,
      purchaseDate,
      model,
      serialNumber,
      user,
      endOfLife,
      purchasePrice,
      type,
      comments,
    } = this.state;
    return (
      <div className="control-panel">
        <input
          placeholder="Asset Tag"
          value={assetTag}
          name="assetTag"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Location"
          value={location}
          name="location"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Purchase Date"
          value={purchaseDate}
          name="purchaseDate"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Model"
          value={model}
          name="model"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Serial Number"
          value={serialNumber}
          name="serialNumber"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="User"
          value={user}
          name="user"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="End of Life"
          value={endOfLife}
          name="endOfLife"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Purchase Price"
          value={purchasePrice}
          name="purchasePrice"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Type"
          value={type}
          name="type"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <input
          placeholder="Comments"
          value={comments}
          name="comments"
          onChange={(e) => this.handleChange(e.target.value, e.target.name)}
        ></input>
        <div id="control-buttons">
          <button onClick={() => this.props.handleAddItem(this.state)}>
            Add
          </button>
          <button onClick={() => this.props.handleFind(this.state)}>
            Find
          </button>
          <button
            onClick={() => {
              this.handleClear();
            }}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
