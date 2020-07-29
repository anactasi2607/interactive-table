import React, { Component } from "react";
import "./App.css";
import Loader from "./Loader/Loader.js";
import Table from "./Table/Table.js";
import Form from "./Form/Form.js";
import DetailInfo from "./DetailInfo/DetailInfo.js";
import _ from "lodash";
import DataSelector from "./DataSelector/DataSelector.js";
import ReactPaginate from "react-paginate";
import "./ReactPaginate/ReactPaginate.css";
import TableSearch from "./TableSearch/TableSearch";

class App extends Component {
  state = {
    isLoading: false,
    data: [],
    sort: "asc",
    sortField: "",
    newUser: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    selectedRow: null,
    isDataSelected: false,
    currentPage: 0,
    displayForm: false,
    isFormValid: true,
    search: "",
  };

  async fetchData(url) {
    const response = await fetch(url);

    const data = await response.json();
    this.setState({
      isLoading: false,
      data,
    });
  }

  // validateForm = () => {
  //   let isFormValid = true;

  //   Object.keys(this.state.newUser).forEach((name) => {
  //     isFormValid = !!this.state.newUser[name] && isFormValid;
  //     console.log(!!this.state.newUser[name]);
  //   });
  //   this.setState({
  //     isFormValid: isFormValid,
  //   });
  // };

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
    console.log(this.state.newUser);

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

  pageChangeHandler = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  onClick = () => {
    this.setState({ displayForm: !this.state.displayForm });
  };

  searchHandler = (search) => {
    this.setState({ search, currentPage: 0 });
  };

  getFilteredData() {
    const { data, search } = this.state;

    if (!search) {
      return data;
    }

    return data.filter((item) => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  render() {
    const pageSize = 50;
    const filteredData = this.getFilteredData(this.state.data);
    const pageCount = Math.ceil(filteredData.length / pageSize);
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
    if (!this.state.isDataSelected) {
      return (
        <div className="container">
          <DataSelector onSelect={this.dataSelectHandler} />
        </div>
      );
    }

    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <header className="header container">
              <h1 className="header__title">Интерактивная таблица</h1>
              <div className="header__content">
                <TableSearch onSearch={this.searchHandler} />
                <button className="header__addButton" onClick={this.onClick}>
                  Добавить
                </button>
              </div>
              {this.state.displayForm ? (
                <Form
                  submitHandler={this.submitHandler}
                  onChangeInput={this.onChangeInput}
                  newUser={this.state.newUser}
                  disabled={!this.state.isFormValid}
                />
              ) : null}
            </header>

            <main className="main container">
              <Table
                data={displayData}
                onClickRow={this.onClickRow}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
              />

              {this.state.data.length > pageSize ? (
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"pagination__item--break"}
                  breakLinkClassName={"pagination__link--break"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.pageChangeHandler}
                  containerClassName={"main__pagination pagination"}
                  activeClassName={"pagination__item--active"}
                  disabledClassName={"pagination__item--disabled"}
                  pageClassName="pagination__item"
                  pageLinkClassName="pagination__link"
                  previousClassName="pagination__item"
                  nextClassName="pagination__item"
                  previousLinkClassName="pagination__link"
                  nextLinkClassName="pagination__link"
                  forcePage={this.state.currentPage}
                />
              ) : null}

              {this.state.selectedRow ? (
                <DetailInfo
                  user={this.state.selectedRow}
                  onClickClose={this.onClickClose}
                />
              ) : null}
            </main>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
