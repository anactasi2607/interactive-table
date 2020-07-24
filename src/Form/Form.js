import React from "react";
import "./Form.css";

function Form() {
  return (
    <form className="add-form">
      <h2 className="add-form-title">
        Добавить нового пользователя в таблицу:
      </h2>
      <div className="add-form-row">
        <label htmlFor="user-id">id:</label>
        <input
          className="add-form-input"
          id="user-id"
          type="number"
          name="user-id"
          placeholder="id"
        ></input>
      </div>

      <div className="add-form-row">
        <label htmlFor="firstName">firstName:</label>
        <input
          className="add-form-input"
          id="firstName"
          type="text"
          name="firstName"
          placeholder="firstName"
        ></input>
      </div>

      <div className="add-form-row">
        <label htmlFor="lastName">lastName:</label>
        <input
          className="add-form-input"
          id="lastName"
          type="text"
          name="lastName"
          placeholder="lastName"
        ></input>
      </div>

      <div className="add-form-row">
        <label htmlFor="email">email:</label>
        <input
          className="add-form-input"
          id="email"
          type="email"
          name="email"
          placeholder="email"
        ></input>
      </div>

      <div className="add-form-row">
        <label htmlFor="phone">phone:</label>
        <input
          className="add-form-input"
          id="phone"
          type="number"
          name="phone"
          placeholder="phone"
        ></input>
      </div>
      <button className="add-form-button">Добавить в таблицу</button>
    </form>
  );
}

export default Form;
