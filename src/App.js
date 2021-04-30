import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import List from "./components/List";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/items")
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch((error) => console.log(error));
  }

  handleDeleteItem(id) {
    axios
      .delete(`/api/items/${id}`)
      .then((res) => this.setState({ items: res.data }))
      .catch((error) => console.log(error));
  }

  handleEditItem(id, item) {
    axios
      .put(`/api/items/${id}`, item)
      .then((res) => this.setState({ items: res.data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Header />
        <ControlPanel />
        <List
          items={this.state.items}
          handleDelete={this.handleDeleteItem}
          handleEditItem={this.handleEditItem}
        />
      </div>
    );
  }
}

export default App;
