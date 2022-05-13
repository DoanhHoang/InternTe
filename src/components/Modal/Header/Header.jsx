import "./Header.scss";
import avatar from "../../../assets/img/Modal/upload-my-profile-1.png";

const ModalHeader = () => {
  return (
    <div className="ModalHeader">
      <div className="ModalHeader-User">
        <img src={avatar}></img>
        <div className="ModalHeader-wrap">
          <h1>The first portfolio movement</h1>
          <h2 className="ModalHeader-wrap--Name">Kim Aeyong</h2>
          <h2 className="ModalHeader-wrap--Category">
            Design, Music Video, Advertising
          </h2>
          <div className="ModalHeader-button">
            <button className="ModalHeader-button--like">Like</button>
            <button className="ModalHeader-button--another">Follow</button>
            <button className="ModalHeader-button--another">Add</button>
            <button className="ModalHeader-Righttab--button">Edit</button>
          </div>
        </div>
      </div>

      <div className="ModalHeader-Right">
        <button>Edit Project</button>
      </div>
      <div className="ModalMobile">
        <img src={avatar} className="ModalMobile--img"></img>
    
          <button className="ModalMobile--button">Like</button>
          <button className="ModalMobile--button">Follow</button>
          <button className="ModalMobile--button">Add</button>
          <button className="ModalMobile--button">Edit</button>

      </div>
    </div>
  );
};

export default ModalHeader;
