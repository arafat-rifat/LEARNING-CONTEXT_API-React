import { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";

const useUsersContext = () => {
  return useContext(UsersContext);
};

export default useUsersContext;
