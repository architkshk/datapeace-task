import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Badge } from "reactstrap";
import history from "../history";

export default class UserTable extends Component {
  rowClick = id => {
    history.push(`user/${id}`);
  };

  render() {
    let { users, sort, direction } = this.props;
    return (
      <Table hover responsive>
        <thead>
          <tr>
            <th>
              First Name
              <Badge
                onClick={() => {
                  sort("first_name");
                }}
                color="light"
              >
                {direction["first_name"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
            <th>
              Last Name
              <Badge
                onClick={() => {
                  sort("last_name");
                }}
                color="light"
              >
                {direction["last_name"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
            <th>
              Company Name
              <Badge
                onClick={() => {
                  sort("company_name");
                }}
                color="light"
              >
                {direction["company_name"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
            <th>
              City
              <Badge
                onClick={() => {
                  sort("city");
                }}
                color="light"
              >
                {direction["city"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
            <th>
              State
              <Badge
                onClick={() => {
                  sort("state");
                }}
                color="light"
              >
                {direction["state"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
            <th>
              Zip
              <Badge
                onClick={() => {
                  sort("zip");
                }}
                color="light"
              >
                {direction["zip"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
            <th>
              Email
              <Badge
                onClick={() => {
                  sort("email");
                }}
                color="light"
              >
                {direction["email"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
            <th>
              Website
              <Badge
                onClick={() => {
                  sort("web");
                }}
                color="light"
              >
                {direction["web"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
            <th>
              Age
              <Badge
                onClick={() => {
                  sort("age");
                }}
                color="light"
              >
                {direction["age"] === "asc" ? <>&and;</> : <>&or;</>}
              </Badge>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(row => (
            <tr
              onClick={() => {
                this.rowClick(row.id);
              }}
              key={row.id}
            >
              <td>{row.first_name}</td>
              <td>{row.last_name}</td>
              <td>{row.company_name}</td>
              <td>{row.city}</td>
              <td>{row.state}</td>
              <td>{row.zip}</td>
              <td>{row.email}</td>
              <td>{row.web}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
