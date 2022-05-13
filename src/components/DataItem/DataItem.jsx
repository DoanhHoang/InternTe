import "./DataItem.scss";

const DataItem = (items) => {
  return (
    <div className="dataitem">
      <div className="dataitem-img">
        <img src={items.img}></img>
      </div>
      <div className="dataitem-title">{items.title}</div>
    </div>
  );
};

export default DataItem;
