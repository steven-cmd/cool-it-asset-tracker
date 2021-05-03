import React, { Component } from "react";
import EditItem from "./EditItem";

class Item extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const {
      assetTag,
      id,
      location,
      purchaseDate,
      model,
      serialNumber,
      user,
      endOfLife,
      purchasePrice,
      type,
      comments,
    } = this.props.item;
    return (
      <div className="item">
        {this.state.isEditing ? (
          <EditItem
            handleEditToggle={this.handleEdit}
            item={this.props.item}
            handleEditItem={this.props.handleEditItem}
          />
        ) : (
          <div>
            <div className="item-title">
              <p>Asset Tag: {assetTag}</p>
              <div className="button-container">
                <button
                  className="edit-button"
                  onClick={() => {
                    this.handleEdit();
                  }}
                >
                  ✎
                </button>
                <button onClick={() => this.props.handleDelete(id)}>X</button>
              </div>
            </div>
            <p>Location: {location}</p>
            <p>Purchase Date: {purchaseDate}</p>
            <p>Model: {model}</p>
            <p>Serial Number: {serialNumber}</p>
            <p>User: {user}</p>
            <p>End of Life: {endOfLife}</p>
            <p>Purchase Price: {purchasePrice}</p>
            <p>Type: {type}</p>
            <p>Comments: {comments}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Item;
