import React from "react";
import { Table } from "react-bootstrap";

const Employee = () => (
  <Table className="mt-5" striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Employee ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Birthday</th>
        <th>Sex</th>
        <th>Salary</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Vlasis</td>
        <td>Tassios</td>
        <td>04/12/1997</td>
        <td>M</td>
        <td>12000</td>
        <td>Production</td>
      </tr>
    </tbody>
  </Table>
);

export default Employee;
