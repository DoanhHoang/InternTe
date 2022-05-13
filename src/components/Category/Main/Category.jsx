import { useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Category.scss";
import left from "../../../assets/img/Category/l-red-circle-arrow.png";
import right from "../../../assets/img/Category/r-red-circle-arrow.png";
const Category = () => {
  const data = [
    "Editing",
    "Camera Action,Angle",
    "Sound, Beat",
    "Graphical",
    "Experimental",
    "Elements",
    "Car",
    "Gun",
    "Doll",
    "Theme",
  ];
  const [category, setCate] = useState(data);
  console.log(category);
  return (
    <div className="category">
       <div className="category-wrapper">
            {
                category.map(
                    (data) => <CategoryItem name={data}/>)
            }
        </div> 
        <img src={left} className="category-left category-btn" ></img>
        <img src={right} className="category-right category-btn"></img>

    </div>
  );
};

export default Category;
