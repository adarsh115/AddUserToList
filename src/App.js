import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setusersList] = React.useState([]);
  const handleAddUser = (uName, uAge) => {
    setusersList((prevuList) => {
      return [
        ...prevuList,
        { name: uName, age: uAge, id: Math.random.toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
