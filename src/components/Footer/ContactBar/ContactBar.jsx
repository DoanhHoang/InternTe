import "./ContactBar.scss";
import face from "../../../assets/img/Footer/sns-icon-2.png";
import insta from "../../../assets/img/Footer/sns-icon-1.png";
import youtube from "../../../assets/img/Footer/sns-icon-3.png";
const ContactBar = () => {
  return (
    <div className="contactBar">
        <div className="contactBar-left">
        <a className ="contactBar-a">Contact</a>
        <a className ="contactBar-a1"> motiontrend@test.com</a>
        </div>
        <div className="contactBar-right">
        <a className ="contactBar-a3">@ Motiontrend. All rights reserved.</a>
        <img src={insta}></img>
        <img src={face}></img>
        <img src={youtube}></img>
        </div>
    </div>
  );
};

export default ContactBar;