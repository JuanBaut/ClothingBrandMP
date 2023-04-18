import React from "react";

// class CarItem extends React.Component {
//   constructor(props) {
//     super(props); //constructor de la clase que hereda
//   }
//   render() {
//     return (
//       <div>
//         <hr></hr>
//         <p>Brand: {this.props.brand}</p>
//         <p>Model: {this.props.model}</p>
//         <hr></hr>
//       </div>
//     );
//   }
// }

const CarItem = (props) => {
  return (
    <div>
      <hr></hr>
      <p>Brand: {props.brand}</p>
      <p>Model: {props.model}</p>
      <hr></hr>
    </div>
  );
};

export default CarItem;
