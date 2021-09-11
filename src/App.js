import logo from './logo.svg';
import './App.css';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import { useState } from 'react/cjs/react.development';

function App() {

  const [users, setUsers] = useState ([])

  function addUser(user) {
    setUsers([...users, user])
  }

  return (
  <>
  <UserForm addUser={addUser} />
  <UserList user={users} />
  </>
  )
}

export default App;
