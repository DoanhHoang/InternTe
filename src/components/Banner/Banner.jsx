import "./Banner.scss";
import BannerMid from "../../assets/img/Banner/tutorial-img-1.png";
import live from "../../assets/img/Banner/live-box.png";
import play from "../../assets/img/Banner/play-icon.png";
import BannerItem from "./BannerItem/BannerItem";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <span>tutorial</span>
        <p>
          Let's look at 7 ways to use motion trend more effectively in the first
          tutorial.
        </p>
        <button>watch now</button>
      </div>
      <div className="banner-mobile">
      <button>watch now</button>
             <p>
          Let's look at 7 ways to use motion trend more effectively in the first
          tutorial.
        </p>
        
      </div>
      <div className="banner-mid">
      <img src={live} className="banner-mid--live" />
      <img src={play} className="banner-mid--play" />
        <img src={BannerMid} className="banner-mid--vid" />
        <span>02:33</span>
      </div>
      <div className="banner-right">
        <BannerItem />
      </div>
    </div>
  );
};

export default Banner;
