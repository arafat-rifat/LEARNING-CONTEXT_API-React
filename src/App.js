import { useState } from "react";
import Users from "./Components/Users";
import NewUser from "./Components/NewUser";
import { UsersContext } from "./Context/UsersContext";

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "anisul" },
    { id: 2, username: "alex" },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div>
        <NewUser />
        <Users users={users} />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
