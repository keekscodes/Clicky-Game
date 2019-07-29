import React from 'react';
import './Cards.css';


// const Cards = props => (
//   <div className="card col-lg-3"
//       id={props.name}
//       onClick={() => props.handleClick(props.name)}
//     >
//       <img alt={props.name} src={ props.image} />
      
//   </div>
// );

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>

      <span className="remove">𝘅</span>
    </div>
  );
}

export default Cards;
