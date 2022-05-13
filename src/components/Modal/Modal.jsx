import "./Modal.scss";
import ModalHeader from "./Header/Header";
import ModalMain from "./Main/Main";

const Modal = ( )=> {
  return (
      <div className="Modal">
        <div className="Modal-Header">
        <ModalHeader/>
        </div>
        <ModalMain/>
      </div>
  );
};

export default Modal;