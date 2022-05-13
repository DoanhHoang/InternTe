import "./Header.scss";
import logo from "../../assets/img/Header/logo-icon@2x.png";
import icon from "../../assets/img/Header/white-search-icon.png";
import arrow from "../../assets/img/Header/clipart365828.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} />
        <a className ="header-a">Discover</a>
        <a className ="header-a" >Job</a>
         <a className ="header-righttab" href="">Login</a>
        <a className ="header-righttab" href="">Sign up</a>
      </div>
      <div className="header-midtab">
        <input type="text" placeholder="Search for motion trend ..." />
        <img src={icon} />
      </div>
      <div className="header-mid">
        <input type="text" placeholder="Search for motion trend ..." />
      </div>
      <div className="header-right">
        <img src={icon} />
        <a className ="header-a" href="">Login</a>
        <a className ="header-a" href="">Sign up</a>
      </div>

      <div className="header-mobile">
      <img src={logo} />
      <img src={arrow} />
      <div className="header-mobile--side">
      <a className ="header-mobile--a">Discover</a>
        <a className ="header-mobile--a" >Job</a>
         <a className ="header-mobile--a" >Login</a>
        <a className ="header-mobile--a" >Sign up</a>
      </div>
      </div>
      
    </header>
  );
};

export default Header;
