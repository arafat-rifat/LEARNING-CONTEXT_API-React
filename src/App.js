import { useState } from "react";
import Users from "./Components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "anisul" },
    { id: 2, username: "alex" },
  ]);

  // For Delete User

  function handleDeleteUser(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  return (
    <div>
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
