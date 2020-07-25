import React from "react";
import "./Table.css";

function Table(props) {
  return (
    <table className="table">
      <thead className="table-thead">
        <tr className="table-tr">
          <th className="table-th">ID</th>
          <th className="table-th">First Name</th>
          <th className="table-th">Last Name</th>
          <th className="table-th">E-mail</th>
          <th className="table-th">Phone</th>
        </tr>
      </thead>
      <tbody className="table-tbody">
        {props.data.map((item) => (
          <tr
            className="table-tr"
            key={item.id + item.phone}
            onClick={props.onClickRow.bind(null, item)}
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
