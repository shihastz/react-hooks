import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleDataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const buttonClick = () => {
    setLoading(true)
    setIdFromButton(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res);
        setLoading(false)
        setPost(res.data);
        setError('')
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
        setPost({});
        setError('Something Went Wrong !')
      });
  }, [idFromButton]);
  return (
    <div>
      <hr />
      <h3>Single Post (Data fetching)</h3>
      <input type="tel" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={buttonClick}>
        Fetch Post
      </button>
      {loading ? <p>Loading...</p> : <p>{post.title}</p>}
      {error ? error : null}
      <hr />
    </div>
  );
}

export default SingleDataFetching;
