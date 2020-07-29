import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    const { submitHandler, onChangeInput, newUser, disabled } = this.props;
    return (
      <form className="header__add-form add-form" onSubmit={submitHandler}>
        <h2 className="add-form__title">
          Добавить нового пользователя в таблицу:
        </h2>
        <div className="add-form__row">
          <label className="add-form__label" htmlFor="user-id">
            id:
          </label>
          <input
            className="add-form__input"
            id="id"
            type="number"
            name="user-id"
            placeholder="id"
            onChange={onChangeInput}
            value={newUser.id}
            required
          ></input>
        </div>

        <div className="add-form__row">
          <label className="add-form__label" htmlFor="firstName">
            firstName:
          </label>
          <input
            className="add-form__input"
            id="firstName"
            type="text"
            name="firstName"
            placeholder="firstName"
            onChange={onChangeInput}
            value={newUser.firstName}
            required
          ></input>
        </div>

        <div className="add-form__row">
          <label className="add-form__label" htmlFor="lastName">
            lastName:
          </label>
          <input
            className="add-form__input"
            id="lastName"
            type="text"
            name="lastName"
            placeholder="lastName"
            onChange={onChangeInput}
            value={newUser.lastName}
            required
          ></input>
        </div>

        <div className="add-form__row">
          <label className="add-form__label" htmlFor="email">
            email:
          </label>
          <input
            className="add-form__input"
            id="email"
            type="email"
            name="email"
            placeholder="email"
            onChange={onChangeInput}
            value={newUser.email}
            required
          ></input>
        </div>

        <div className="add-form__row">
          <label className="add-form__label" htmlFor="phone">
            phone:
          </label>
          <input
            className="add-form__input"
            id="phone"
            type="number"
            name="phone"
            placeholder="phone"
            onChange={onChangeInput}
            value={newUser.phone}
            required
          ></input>
        </div>
        <button className="add-form__button" disabled={disabled}>
          Добавить в таблицу
        </button>
      </form>
    );
  }
}

export default Form;
