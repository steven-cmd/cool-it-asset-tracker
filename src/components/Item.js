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
            <button onClick={() => this.props.handleDelete(this.props.item.id)}>
              delete
            </button>
            <p>Asset Tag: {this.props.item.assetTag}</p>
            <p>Location: {this.props.item.location}</p>
            <p>Purchase Date: {this.props.item.purchaseDate}</p>
            <p>Model: {this.props.item.model}</p>
            <p>Serial Number: {this.props.item.serialNumber}</p>
            <p>User: {this.props.item.user}</p>
            <p>End of Life: {this.props.item.endOfLife}</p>
            <p>Purchase Price: {this.props.item.purchasePrice}</p>
            <p>Type: {this.props.item.type}</p>
            <p>Comments: {this.props.item.comments}</p>
            <button
              onClick={() => {
                this.handleEdit();
              }}
            >
              edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Item;
