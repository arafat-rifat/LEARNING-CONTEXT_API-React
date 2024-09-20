import { useState } from "react";
import useUsersContext from "../hooks/useUsersContext";

const NewUser = ({ handleAddUser }) => {
  const [userName, setUserName] = useState("");

  const { setUsers } = useUsersContext();

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: userName };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUserName("");
  }

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
