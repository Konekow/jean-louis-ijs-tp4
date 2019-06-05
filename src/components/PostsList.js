import React, { useEffect, useState } from 'react';
import Post from './Post';

/*
const PostsList = ({ posts = [] }) => (
  <ul style={{ listStyle: 'none', width: '800px' }}>
    {posts.map(p => (
      <Post data={p} />
    ))}
  </ul>
);
*/

const PostsList = ({ posts = [] }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts').then(
          (val) => {val.json().then(
            (val) => {setData(val)}
            )
          }
        );
  }, []);

  return (
  <ul style={{ listStyle: 'none', width: '800px' }}>
    {data.map(p => (
      <Post data={p} />
    ))}
  </ul>
);
}

export default PostsList;
