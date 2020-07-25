import React, { Component } from "react";
import "./App.css";
import Loader from "./Loader/Loader.js";
import Table from "./Table/Table.js";
import Form from "./Form/Form.js";

class App extends Component {
  state = {
    isLoading: true,
    data: [],
    newUser: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  };

  async componentDidMount() {
    const response = await fetch(
      ` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    );

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
    console.log(this.state.newUser);
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

  render() {
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
            <Table data={this.state.data} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
