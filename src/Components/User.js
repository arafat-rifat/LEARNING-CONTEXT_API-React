import React from "react";

const User = ({ user }) => {
  const { id, username } = user;

  function handleDelete(id) {
    console.log(id);
  }

  return (
    <article className="user">
      <h2>{id}</h2>
      <p>{username}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        delete
      </button>
    </article>
  );
};

export default User;
