import Users from "./Components/Users";
import NewUser from "./Components/NewUser";
import UserProvider from "./Context/UsersContext";

function App() {
  return (
    <UserProvider>
      <div>
        <NewUser />
        <Users />
      </div>
    </UserProvider>
  );
}

export default App;
