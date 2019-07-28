import React from 'react';
import './Cards.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads


const Cards = props => (
  <div className='cards' onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace('.jpg', '')} src={require('../../images' + props.image)} />
    </div>
  </div>
);


export default Cards;

