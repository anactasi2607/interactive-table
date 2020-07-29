import React from "react";
import "./Table.css";

function Table(props) {
  return (
    <table className="main__table table">
      <thead className="table__thead">
        <tr className="table__tr">
          <th
            className="table__th"
            onClick={props.onSort.bind(null, "id")}
            title="Нажмите для сортировки"
          >
            ID{" "}
            {props.sortField === "id" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
          <th
            className="table__th"
            onClick={props.onSort.bind(null, "firstName")}
            title="Нажмите для сортировки"
          >
            First Name
            {props.sortField === "firstName" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
          <th
            className="table__th"
            onClick={props.onSort.bind(null, "lastName")}
            title="Нажмите для сортировки"
          >
            Last Name
            {props.sortField === "lastName" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
          <th
            className="table__th"
            onClick={props.onSort.bind(null, "email")}
            title="Нажмите для сортировки"
          >
            E-mail
            {props.sortField === "email" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
          <th
            className="table__th"
            onClick={props.onSort.bind(null, "phone")}
            title="Нажмите для сортировки"
          >
            Phone
            {props.sortField === "phone" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        {props.data.map((item) => (
          <tr
            className="table__tr"
            key={item.id + item.phone}
            onClick={props.onClickRow.bind(null, item)}
            title="Нажмите для получения подробной информации"
          >
            <td className="table__td">{item.id}</td>
            <td className="table__td">{item.firstName}</td>
            <td className="table__td">{item.lastName}</td>
            <td className="table__td">{item.email}</td>
            <td className="table__td">{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
