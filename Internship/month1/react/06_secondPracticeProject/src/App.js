import React, { useState } from "react";

// imported files
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [allData, setAllData] = useState([]);
  const handleUserData = (Data) => {
    setAllData([...allData, Data]);
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
        <UserList allUserData={allData} />
      )}
    </>
  );
};

export default App;
