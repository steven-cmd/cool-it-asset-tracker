import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        list here
        <Item />
      </div>
    );
  }
}

export default List;
