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
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleFind = this.handleFind.bind(this);
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

  handleAddItem(item) {
    axios
      .post("/api/items", item)
      .then((res) => this.setState({ items: res.data }))
      .catch((error) => console.log(error));
  }

  handleFind(item) {
    axios
      .post("/api/filteredItems", item)
      .then((res) => this.setState({ items: res.data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Header />
        <ControlPanel
          handleAddItem={this.handleAddItem}
          handleFind={this.handleFind}
        />
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
