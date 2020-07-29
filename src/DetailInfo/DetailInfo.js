import React from "react";
import "./DetailInfo.css";

function DetailInfo({ user, onClickClose }) {
  return (
    <div className="main__info info">
      <h3 className="info__title">Подробная информация</h3>
      <button className="info__button" onClick={onClickClose} title="Закрыть">
        X
      </button>
      <div className="info__row">
        <p className="info__p">Выбран пользователь:</p>{" "}
        <span>{user.firstName + " " + user.lastName}</span>
      </div>

      <div className="info__row">
        <p className="info__p">Адрес проживания:</p>
        <span>{user.address.streetAddress}</span>
      </div>

      <div className="info__row">
        <p className="info__p">Город:</p> <span>{user.address.city}</span>
      </div>

      <div className="info__row">
        <p className="info__p">Провинция/штат:</p>{" "}
        <span>{user.address.state}</span>
      </div>

      <div className="info__row">
        <p className="info__p">Индекс:</p> <span>{user.address.zip}</span>
      </div>
      <div className="info__row">
        <p className="info__p">Описание:</p>
        <textarea className="info__text" defaultValue={user.description} />
      </div>
    </div>
  );
}

export default DetailInfo;
