import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUsername, setenteredUsername] = React.useState("");
  const [enteredAge, setenteredAge] = React.useState("");
  const [error, seterror] = React.useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      seterror({
        title: "Invalid Input",
        message: "Please enter avalid name and age (non-empty values) ",
      });
      return;
    }
    if (+enteredAge < 1) {
      seterror({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setenteredUsername("");
    setenteredAge("");
  };

  const handleUsernameChange = (event) => {
    setenteredUsername(event.target.value);
  };
  const handleAgeChange = (event) => {
    setenteredAge(event.target.value);
  };
  const errorHandler = () => {
    seterror(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          errorHandler={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={handleUsernameChange}
          />
          <label htmlFor="username">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={handleAgeChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
