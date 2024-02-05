import React from "react";

import classes from "./UserList.module.css";
const UserList = ({ allUserData }) => {
  return (
    <div className={classes.area}>
      {allUserData.map((user) => (
        <li className={classes.list}>{user.username +"("+user.age +' years old)'}</li>
      ))}
    </div>
  );
};

export default UserList;
