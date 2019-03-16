import React, { Component } from "react";
import { Input, Pagination, PaginationItem, PaginationLink } from "reactstrap";

import UserTable from "../Components/UserTable";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      searchText: "",
      users: props.data,
      direction: {},
      page: 1,
      pages: Math.ceil(props.data.length / 5)
    };
  }

  sortBy = key => {
    let { users } = this.state;
    users = users.sort((a, b) =>
      this.state.direction[key] === "asc"
        ? this.compare(a, b, key)
        : this.compare(b, a, key)
    );
    this.setState({
      users,
      pages: Math.ceil(users.length / 5),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  };

  compare = (a, b, key) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };

  findUsers = () => {
    let { searchText, data } = this.state;
    let users = data.filter(u =>
      u.first_name.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({
      users,
      pages: Math.ceil(users.length / 5),
      page: 1
    });
  };

  renderPagination = () => {
    let items = [],
      { pages, page } = this.state;
    let j = page > 5 ? page - 5 : 1;
    items.push(
      <PaginationItem>
        <PaginationLink
          previous
          disabled={page === 1}
          onClick={e => this.setState({ page: page - 1 })}
        />
      </PaginationItem>
    );
    for (let i = j; i <= j + 9 && i <= pages; i++) {
      if (page === i)
        items.push(
          <PaginationItem active>
            <PaginationLink
              onClick={e =>
                this.setState({ page: parseInt(e.target.textContent) })
              }
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      else {
        items.push(
          <PaginationItem>
            <PaginationLink
              onClick={e =>
                this.setState({ page: parseInt(e.target.textContent) })
              }
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    items.push(
      <PaginationItem>
        <PaginationLink
          next
          disabled={page === pages}
          onClick={e => this.setState({ page: page + 1 })}
        />
      </PaginationItem>
    );
    return <Pagination>{items}</Pagination>;
  };

  render() {
    return (
      <main>
        <div className="container py-4">
          <Input
            placeholder="Search Here"
            onChange={e => {
              this.setState({ searchText: e.target.value }, this.findUsers);
            }}
            value={this.state.searchText}
          />
          <UserTable
            direction={this.state.direction}
            users={this.state.users.slice(
              5 * (this.state.page - 1),
              5 * (this.state.page - 1) + 5
            )}
            sort={this.sortBy}
          />
          <div className="d-flex justify-content-center my-4">
            {this.renderPagination()}
          </div>
        </div>
      </main>
    );
  }
}
