import "./Main.scss";
import MainItem from "../MainItem/MainItem";
import { dataMain } from "../../assets/datamain";
const Main = () => {
  console.log(dataMain);
  return (
    <div className="pagemain">
      <div className="pagemain-pick">
        <a className="pagemain-pick--a pagemain-pick--selected">Motion trend pick</a>
        <a className="pagemain-pick--a">Latest</a>
        <a className="pagemain-pick--a">Recommended</a>
      </div>

      <div className="pagemain-list">
        {
          dataMain.map(data => <MainItem {...data}/>)
        }
      </div>
    </div>
  );
};

export default Main;
