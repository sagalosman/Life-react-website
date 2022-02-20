import React from "react";
import { ClassList } from "../helpers/ClassList";
import ClassItem from "../components/ClassItem";
import "../styles/Class.css";

function Class() {
  return (
    <div className="class">
      <h1 className="classTitle">Our Classes</h1>
      <div className="classList">
        {ClassList.map((classItem, key) => {
          return (
            <ClassItem
              key={key}
              image={classItem.image}
              name={classItem.name}
              price={classItem.price}
            />
          );
        })}
      </div> 
    </div>
  );
}

export default Class;
