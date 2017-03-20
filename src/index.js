import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';

const users = [
  { name: 'James' },
  { name: 'Cristiano' },
  { name: 'Luka' },
  { name: 'Francisco' },
  { name: 'Sergio' },
  { name: 'Bale' },
];

ReactDOM.render(<UserList users={users} />, document.getElementById("app"));
