import React from "react";
import CarItem from "../CarItem/CarItem";

const CarBrands = (props) => {
  return (
    <div className="App">
      {props.list.map((car) => {
        return <CarItem model={car.model} brand={car.brand} />;
      })}
    </div>
  );
};

export default CarBrands;
 