import React from 'react';
import User from './User';

export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: '',
    }
  }

  handleChange(e) {
    this.setState({
      filter: e.target.value,
    });
  }

  render() {
    const { users } = this.props;
    const { filter } = this.state;
    const usersFiltered = users.filter((user) => {
      return user.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    }).map((user, i) => {
      return <User key={i} user={user} />;
    });

    return (
      <div>
        <h1>Users</h1>
        <input onChange={(e) => this.handleChange(e)} />
        <ul>
          {usersFiltered}
        </ul>
      </div>
    )
  }
}
