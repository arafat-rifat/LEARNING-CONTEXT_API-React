import React, { useState } from "react";

const NewUser = ({ handleAddUser }) => {
  const [userName, setUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: userName };
    handleAddUser(newUser);
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
