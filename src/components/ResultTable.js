import React from "react";

export default function ResultTable() {
  return (
    <div className="result-table">
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>Diego</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}