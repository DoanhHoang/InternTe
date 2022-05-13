import "./BannerItem.scss";
import banner1 from "../../../assets/img/Banner/tutorial-img-2.png";
import banner3 from "../../../assets/img/Banner/tutorial-img-2-copy-2.png";
import banner2 from "../../../assets/img/Banner/tutorial-img-3.png";
import like from "../../../assets/img/Banner/like-icon.png";
import view from "../../../assets/img/Banner/view-icon.png";
const BannerItem = () => {
  return (
    <div className="banneritems">
      <div className="banneritem">
        <img src={banner1}></img>
        <div className="banneritem-wrap">
          <span>Tutorial</span>
          <p>A tutorial video with Motion Trend. Let's Learn Motion Trends.</p>
          <div className="banneritem-icons">
            <div className="banneritem-icons--wrap">
              <img src={like} className="banneritem-icons"></img>
              18
            </div>
            <div className="banneritem-icons--wrap">
              <img src={view} className="banneritem-icons"></img>
              18
            </div>
          </div>
        </div>
      </div>

      <div className="banneritem">
        <img src={banner2}></img>
        <div className="banneritem-wrap">
          <span>Tutorial</span>
          <p>A tutorial video with Motion Trend. Let's Learn Motion Trends.</p>
          <div className="banneritem-icons">
            <div className="banneritem-icons--wrap">
              <img src={like} className="banneritem-icons"></img>
              18
            </div>
            <div className="banneritem-icons--wrap">
              <img src={view} className="banneritem-icons"></img>
              18
            </div>
          </div>
        </div>
      </div>

      <div className="banneritem">
        <img src={banner3}></img>
        <div className="banneritem-wrap">
          <span>Tutorial</span>
          <p>A tutorial video with Motion Trend. Let's Learn Motion Trends.</p>
          <div className="banneritem-icons">
            <div className="banneritem-icons--wrap">
              <img src={like} className="banneritem-icons"></img>
              18
            </div>
            <div className="banneritem-icons--wrap">
              <img src={view} className="banneritem-icons"></img>
              18
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
