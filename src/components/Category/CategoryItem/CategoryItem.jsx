import "./CategoryItem.scss";

const CategoryItem = (props) => {

  return (
    <button className="CategoryItem">
        <p>{props.name}</p>
    </button>
  );
};

export default CategoryItem;
