import "./Main.scss";
import img1 from "../../../assets/img/Modal/upload-video-img-2@2x.png";
import img2 from "../../../assets/img/Modal/upload-video-img-3@2x.png";
import img3 from "../../../assets/img/Modal/upload-video-img-4@2x.png";
import video from "../../../assets/img/Modal/upload-video-img-1@3x.png";
import play from "../../../assets/img/Modal/play-icon.png";

const ModalMain = () => {
  return (
    <div className="ModalMain">
      <img src={video}></img>
      <div className=" ModalMain-icon" >
      </div>
      <span>
        Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you
        very much. Hello. I ’m Kim Aeyong. This is my first portfolio movement.
        Thank you very much. Hello. I ’m Kim Aeyong. This is my first portfolio
        movement. Thank you very much. Hello. I ’m Kim Aeyong. This is my first
        portfolio movement. Thank you very much.
      </span>
      <img src={img1}></img>
      <img src={img2}></img>
      <img src={img3}></img>
    </div>
  );
};

export default ModalMain;
