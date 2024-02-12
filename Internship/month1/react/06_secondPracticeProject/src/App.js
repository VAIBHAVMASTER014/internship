import React, { useState } from "react";

// imported files
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [allData, setAllData] = useState([]);
  const handleUserData = (Data) => {
    setAllData([...allData, Data]);
    
  };
  
  var updatedData ;
  const updateHandleUserData = (Data) => {

  };
  const deleteHandleUserData = (id) => {
    console.log(allData);
      allData.splice(allData.indexOf(id), 1);
      console.log(allData);
  };
  return (
    <>
      <NewUser onChangeUserData={handleUserData} />
      {allData.length === 0 ? (
        <p style={{ color: "white", textAlign: "center", fontSize: "19px" }}>
          No data Added.
        </p>
      ) : (
        <UserList allUserData={allData} onDeleteData={deleteHandleUserData}  onUpdateData={updateHandleUserData}/>
      )}
    </>
  );
};

export default App;
