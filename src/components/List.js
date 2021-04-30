import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              handleDelete={this.props.handleDelete}
              handleEditItem={this.props.handleEditItem}
            />
          );
        })}
      </div>
    );
  }
}

export default List;
