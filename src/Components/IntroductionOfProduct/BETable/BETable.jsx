import React from "react";
import "./BETable.scss";

function BETable({ tableData = [{}] }) {
  // const tableData = [
  //   { id: 1, fullName: "Noor Khan", age: 25, city: "Patna" },
  // ];
  const column = Object.keys(tableData[0]);
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };
  const tdData = () => {
    return tableData.map((data, index) => {
      return (
        <tr key={index}>
          {column.map((v, index) => {
            return <td key={index}>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <table className="be-table">
      <thead className="be-table__header">
        <tr>{ThData()}</tr>
      </thead>
      <tbody className="be-table__body">{tdData()}</tbody>
    </table>
  );
}

export default BETable;
