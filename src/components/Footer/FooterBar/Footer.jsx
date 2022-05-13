import "./Footer.scss";
import logo from "../../../assets/img/Footer/black-logo-icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
      <a className ="footer-a">Introduction</a>
       <a className ="footer-a" >Terms of Service</a>
       <a className ="footer-a">Language&ensp;<i class="arrow"></i></a>
       <a className ="footer-a" >Customer Service</a>
      </div>
      <div className="footer-right">
      <img src={logo} />
      </div>
    </div>
  );
};

export default Footer;