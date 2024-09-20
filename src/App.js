import { useState } from "react";
import Users from "./Components/Users";
import NewUser from "./Components/NewUser";

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "anisul" },
    { id: 2, username: "alex" },
  ]);

  console.log(users);

  // For Delete User

  function handleDeleteUser(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  // For Adding new User

  function handleAddUser(newUser) {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  return (
    <div>
      <NewUser handleAddUser={handleAddUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
