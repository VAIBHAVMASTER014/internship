import ReactDom from "react-dom";
import { ReactNode } from "react";

// css files
import classes from "../components/Navbar/UserProfile/User.module.css";

const Backdrop: React.FC<{ onHideProfile: () => void }> = ({
  onHideProfile,
}) => {
  return <div className={classes.backdrop} onClick={onHideProfile}></div>;
};

const ModalOverlay: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement: HTMLElement | null = document.getElementById("overlays");

const UserModal: React.FC<{
  children: ReactNode;
  onHideProfile: () => void;
}> = ({ children, onHideProfile }) => {
  return (
    <>
      {portalElement &&
        ReactDom.createPortal(
          <Backdrop onHideProfile={onHideProfile} />,
          portalElement
        )}
      {portalElement &&
        ReactDom.createPortal(
          <ModalOverlay>{children}</ModalOverlay>,
          portalElement
        )}
    </>
  );
};

export default UserModal;
