import React from "react";
import "./Table.css";

function Table(props) {
  return (
    <table className="table">
      <thead className="table-thead">
        <tr className="table-tr">
          <th
            className="table-th"
            onClick={props.onSort.bind(null, "id")}
            title="Нажмите для сортировки"
          >
            ID{" "}
            {props.sortField === "id" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
          <th
            className="table-th"
            onClick={props.onSort.bind(null, "firstName")}
            title="Нажмите для сортировки"
          >
            First Name
            {props.sortField === "firstName" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
          <th
            className="table-th"
            onClick={props.onSort.bind(null, "lastName")}
            title="Нажмите для сортировки"
          >
            Last Name
            {props.sortField === "lastName" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
          <th
            className="table-th"
            onClick={props.onSort.bind(null, "email")}
            title="Нажмите для сортировки"
          >
            E-mail
            {props.sortField === "email" ? (
              <span className={props.sort}></span>
            ) : null}
          </th>
          <th
            className="table-th"
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
      <tbody className="table-tbody">
        {props.data.map((item) => (
          <tr
            className="table-tr"
            key={item.id + item.phone}
            onClick={props.onClickRow.bind(null, item)}
            title="Нажмите для получения подробной информации"
          >
            <td className="table-td">{item.id}</td>
            <td className="table-td">{item.firstName}</td>
            <td className="table-td">{item.lastName}</td>
            <td className="table-td">{item.email}</td>
            <td className="table-td">{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
