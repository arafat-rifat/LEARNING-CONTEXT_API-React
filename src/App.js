import { useState } from "react";
import Users from "./Components/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "anisul" },
    { id: 2, username: "alex" },
  ]);

  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default App;
