import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// imported files
import UserModal from "../../../util/UserModal";
import "./UserProfile.css";
import { useAppSelector, useAppDispatch } from "../../../redux/foodSlice";
import { validate } from "../../../redux/cartSlice";
import ProfilePage from "./ProfilePage";
import { toastFuncSuccess } from "../../../util/ToastFunc";

const UserProfile: React.FC<{ onHideProfile: () => void }> = ({
  onHideProfile,
}) => {
  const [profileView, setProfileView] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const verifiedUser = useAppSelector((state) => state.cart.valid);
  const validData = JSON.parse(localStorage.getItem("registerData") || "hello");
  const logoutHandler = () => {
    toastFuncSuccess("User logged out successfully");
    navigate("/login");
    onHideProfile();
    dispatch(validate(false));
  };

  const profileClickHandler: () => void = () => {
    setProfileView((prevState) => !prevState);
  };
  const showProfile = (
    <div className="user-profile-data">
      <p>Hey , {validData["name"]}</p>
    </div>
  );

  return (
    <UserModal onHideProfile={onHideProfile}>
      <div className="profile">
        <div className="profile-content">
          {verifiedUser ? (
            profileView ? (
              <ProfilePage
                onCancle={profileClickHandler}
                onHide={onHideProfile}
              />
            ) : (
              showProfile
            )
          ) : (
            <p>You haven't loggedin yet</p>
          )}
        </div>
        <div className="profile-btn-section">
          {verifiedUser ? (
            <>
              {!profileView && (
                <>
                  <button className="profile-btn" onClick={logoutHandler}>
                    Logout
                  </button>
                  <button
                    className="profile-btn"
                    type="button"
                    onClick={profileClickHandler}
                  >
                    {" "}
                    Profile
                  </button>
                </>
              )}
            </>
          ) : (
            <button
              className="profile-btn"
              onClick={() => {
                navigate("/login");
                onHideProfile();
              }}
            >
              LogIn
            </button>
          )}
        </div>
      </div>
    </UserModal>
  );
};

export default UserProfile;
