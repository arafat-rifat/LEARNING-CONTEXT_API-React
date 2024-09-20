import useUsersContext from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { users, setUsers } = useUsersContext();

  const { id, username } = user;

  function handleDelete(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
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
