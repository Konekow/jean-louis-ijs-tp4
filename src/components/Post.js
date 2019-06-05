import React, { useState, useReducer } from 'react';
import FavouriteToggle from './FavouriteToggle';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Post = ({ data }) => {
  const [isTitle, setTitle] = useState(true);
  const [count, dispatch] = useReducer(counterReducer);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  }

  return (
  <div>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <span> {count} </span>
    <li
      style={{
        backgroundColor: 'white',
        color: '#333',
        margin: '5px',
        padding: '10px',
        fontSize: '11pt',
        cursor: 'pointer'
      }}
    >
      <span  
        style={{ fontWeight: '900' }}
        onClick={() => {
          setTitle(!isTitle);
        }}>
          { isTitle ? data.title : data.body }
      </span>

      <FavouriteToggle style={{ float: 'right' }} />
    </li>
  </div>
  );
}

export default Post;
