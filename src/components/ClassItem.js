import React from "react";

function ClassItem({ image, name, price }) {
  return (
    <div className="classItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> £{price} </p>
    </div>
  );
}

export default ClassItem;
