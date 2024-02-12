import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({onHideCart}) => {
  return <div className={classes.backdrop} onClick={onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onHideCart={props.hideCart}/>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
