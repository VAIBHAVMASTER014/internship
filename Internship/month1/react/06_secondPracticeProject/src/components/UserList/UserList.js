import React from "react";

import classes from "./UserList.module.css";
const UserList = ({ allUserData, error }) => {
  return (
    <div className={error ?classes.invalid : classes.area}>
      {allUserData.map((user) => (
        <li className={classes.list}>{user.username +"("+user.age +' years old)'}</li>
      ))}    </div>
  );
};

export default UserList;
