import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// css files
import "./UserProfile.css";

const ProfilePage: React.FC<{ onCancle: () => void; onHide: () => void }> = ({
  onCancle,
  onHide,
}) => {
  const registereData = JSON.parse(
    localStorage.getItem("registerData") || "hello"
  ) || {
    name: "unknown",
    email: "unknown",
    password: "null",
    cpassword: "null",
  };
  const navigate = useNavigate();

  const editClickHandler = () => {
    onHide();
    navigate("/editprofile");
  };

  const showProfileData = (
    <>
      <div className="user-profile-data">
        <p>Name : {registereData.name}</p>
        <p>Email : {registereData.email}</p>
      </div>
      <div className="profile-btn-section">
        <button
          title="edit-profile-button"
          type="button"
          className="profile-btn"
          onClick={editClickHandler}
        >
          <FontAwesomeIcon icon={faPenToSquare} /> profile
        </button>
        <button
          title="edit-profile-button"
          type="button"
          className="profile-btn"
          onClick={onCancle}
        >
          Cancle
        </button>
      </div>
    </>
  );
  return <>{showProfileData}</>;
};

export default ProfilePage;
