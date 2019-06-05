import React, { useState } from 'react';
/*
const FavouriteToggle = ({ isActive = false, style = {} }) => (
  <span style={style}>{isActive ? '♥️' : '♡'}</span>
);*/

const FavouriteToggle = (props) => {
  const [isActive, setActive] = useState(props.isActive);

  return (
      <span style={props.style}
        onClick={() => { setActive(!isActive)} }>
          {isActive ? '♥️' : '♡'}
      </span>
  )
}

export default FavouriteToggle;
