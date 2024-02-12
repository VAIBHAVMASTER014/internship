import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faTrashCan } from '@fortawesome/free-solid-svg-icons'

import classes from "./UserList.module.css";
const UserList = ({ allUserData, error, onUpdateData, onDeleteData }) => {

  const updateUserData = (id) => {
    onUpdateData(id);
  }
  const deleteUserData = (id) => {
    onDeleteData(id);
    
    
  }
  
  return (
    <div className={error ?classes.invalid : classes.area}>
      {allUserData.map((user) => (
        <li key = {user.id} className={classes.list}>{user.username +"("+user.age +' years old)'} <div className={classes['list-item']}><FontAwesomeIcon icon={faPencil} onClick={()=>updateUserData(user.id)} /> <FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteUserData(user.id)} /></div></li>
      ))}    </div>
  );
};

export default UserList;
