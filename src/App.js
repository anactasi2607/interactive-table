import React, { Component } from "react";
import "./App.css";
import Loader from "./Loader/Loader.js";
import Table from "./Table/Table.js";
import Form from "./Form/Form.js";
import DetailInfo from "./DetailInfo/DetailInfo.js";
import _ from "lodash";
import DataSelector from "./DataSelector/DataSelector.js";

class App extends Component {
  state = {
    isLoading: false,
    data: [],
    sort: "asc",
    sortField: "",
    mokDate: [
      {
        id: 101,
        firstName: "Sue",
        lastName: "Corson",
        email: "DWhalley@in.gov",
        phone: "(612)211-6296",
        address: {
          streetAddress: "9792 Mattis Ct",
          city: "Waukesha",
          state: "WI",
          zip: "22178",
        },
        description: "et lacus magna dolor...",
      },
      {
        id: 102,
        firstName: "Иван",
        lastName: "Петров",
        email: "Ahnalley@in.gov",
        phone: "(912)211-6200",
        address: {
          streetAddress: "улица Советская",
          city: "порплоsha",
          state: "WI",
          zip: "22178",
        },
        description: "et lacus magna dolor...",
      },
      {
        id: 103,
        firstName: "Марья",
        lastName: "Сидорова",
        email: "Msdfhalley@in.gov",
        phone: "(512)211-5533",
        address: {
          streetAddress: "улица Кирова",
          city: "Северодвинск",
          state: "WI",
          zip: "22178",
        },
        description: "et lacus magna dolor...",
      },
    ],
    newUser: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    selectedRow: null,
    isDataSelected: false,
  };

  async fetchData(url) {
    const response = await fetch(url);

    const data = await response.json();
    this.setState({
      isLoading: false,
      data,
    });
  }

  onChangeInput = (evt) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [evt.target.id]: evt.target.value,
      },
    });
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    const { newUser, data } = this.state;

    this.setState({
      data: [newUser, ...data],
      newUser: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    });
  };

  onClickRow = (row) => {
    this.setState({
      selectedRow: row,
    });
  };

  onClickClose = () => {
    this.setState({
      selectedRow: null,
    });
  };

  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === "asc" ? "desc" : "asc";
    const orderedData = _.orderBy(cloneData, sortField, sortType);
    this.setState({
      data: orderedData,
      sort: sortType,
      sortField,
    });
  };

  dataSelectHandler = (url) => {
    this.setState({
      isDataSelected: true,
      isLoading: true,
    });
    this.fetchData(url);
  };

  render() {
    if (!this.state.isDataSelected) {
      return (
        <div className="container">
          <DataSelector onSelect={this.dataSelectHandler} />
        </div>
      );
    }

    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Form
              submitHandler={this.submitHandler}
              onChangeInput={this.onChangeInput}
              newUser={this.state.newUser}
            />
            <Table
              data={this.state.data}
              onClickRow={this.onClickRow}
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
            />
            {this.state.selectedRow ? (
              <DetailInfo
                user={this.state.selectedRow}
                onClickClose={this.onClickClose}
              />
            ) : null}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
