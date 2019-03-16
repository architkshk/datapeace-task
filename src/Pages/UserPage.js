import React, { Component } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";
export default class UserPage extends Component {
  render() {
    let { data } = this.props;
    if (data)
      return (
        <div className="container py-4">
          <h1>{data.first_name}</h1>
          <ListGroup>
            <ListGroupItem>
              <div className="d-flex justify-content-around">
                <div className="w-100">Company</div>
                <div className="w-100 text-right">{data.company_name}</div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex justify-content-around">
                <div className="w-100">City</div>
                <div className="w-100 text-right">{data.city}</div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex justify-content-around">
                <div className="w-100">State</div>
                <div className="w-100 text-right">{data.state}</div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex justify-content-around">
                <div className="w-100">Zip</div>
                <div className="w-100 text-right">{data.zip}</div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex justify-content-around">
                <div className="w-100">Email</div>
                <div className="w-100 text-right">{data.email}</div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex justify-content-around">
                <div className="w-100">Website</div>
                <div className="w-100 text-right">{data.web}</div>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-flex justify-content-around">
                <div className="w-100">Age</div>
                <div className="w-100 text-right">{data.age}</div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      );
    return <div />;
  }
}
