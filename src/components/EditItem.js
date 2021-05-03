import React, { Component } from "react";

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assetTag: this.props.item.assetTag,
      location: this.props.item.location,
      user: this.props.item.user,
      endOfLife: this.props.item.endOfLife,
      purchaseDate: this.props.item.purchaseDate,
      purchasePrice: this.props.item.purchasePrice,
      model: this.props.item.model,
      type: this.props.item.type,
      serialNumber: this.props.item.serialNumber,
      comments: this.props.item.comments,
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name) {
    this.setState({ [name]: value });
  }

  handleSave() {
    this.props.handleEditItem(this.props.item.id, this.state);
    this.props.handleEditToggle();
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
      <div className="edit-item">
        <div className="item-title">
          <p>Asset Tag: {assetTag} </p>
        </div>
        <div>
          <span>Asset Tag: </span>
          <input
            placeholder="Asset Tag"
            value={assetTag}
            name="assetTag"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>
        <div>
          <span>Location: </span>
          <input
            placeholder="Location"
            value={location}
            name="location"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <div>
          <span>Purchase date: </span>
          <input
            placeholder="Purchase Date"
            value={purchaseDate}
            name="purchaseDate"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <div>
          <span>Model: </span>
          <input
            placeholder="Model"
            value={model}
            name="model"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <div>
          <span>Serial Number: </span>
          <input
            placeholder="Serial Number"
            value={serialNumber}
            name="serialNumber"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <div>
          <span>User: </span>
          <input
            placeholder="User"
            value={user}
            name="user"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <div>
          <span>End of Life: </span>
          <input
            placeholder="End of Life"
            value={endOfLife}
            name="endOfLife"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <div>
          <span>Purchase Price: </span>
          <input
            placeholder="Purchase Price"
            value={purchasePrice}
            name="purchasePrice"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <div>
          <span>Type: </span>
          <input
            placeholder="Type"
            value={type}
            name="type"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <div>
          <span>Comments: </span>
          <input
            placeholder="Comments"
            value={comments}
            name="comments"
            onChange={(e) => this.handleChange(e.target.value, e.target.name)}
          ></input>
        </div>

        <button onClick={() => this.handleSave()}>Save</button>
      </div>
    );
  }
}

export default EditItem;
