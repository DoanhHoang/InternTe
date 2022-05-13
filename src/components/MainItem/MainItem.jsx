import "./MainItem.scss";
import flag from "../../assets/img/MainItem/label-tz.png";
import arrow from "../../assets/img/MainItem/line-black-arrow-down-icon.png"
import view from "../../assets/img/MainItem/view-icon.png";
import like from "../../assets/img/MainItem/like-icon.png";

const MainItem = (props) => {
  return (
    <div className="mainitem">
      <div className="mainitem-top">
        <img src={props.img} className="mainitem-img"></img>
        {props.flag ? (
          <img src={flag} className="mainitem-top--flag"></img>
        ) : (
          ""
        )}
        <p className="mainitem-top--detail">{props.detail}</p>
        <span>{props.time}</span>
      </div>
      <div className="mainitem-bot">
        <div className="mainitem-bot--user">
          <img src={props.userAva} className="mainitem-bot--avaimg"></img>
          <span>
            {props.user}
            {props.user === "Multiple owners" ? (
              <img src={arrow} className="mainitem-icons--arrow"></img>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="mainitem-bot--tt">
          <div className="mainitem-icons--wrap">
            18
            <img src={like} className="mainitem-icons"></img>
          </div>
          <div className="mainitem-icons--wrap">
            18
            <img src={view} className="mainitem-icons"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
