import React from "react";

// imported files
import UserForm from "../UserForm/UserForm";

const NewUser = ({ onChangeUserData }) => {
  const handleUser = (userData) => {
    onChangeUserData(userData);
    console.log("in newUser");
  };
  return (
    <div>
      <UserForm onAddData={handleUser} />
    </div>
  );
};

export default NewUser;
