import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const Post = () => {
  const [post, setPost] = useState(null);
  const params = useParams()

  useEffect(() => {
    fetchData();
  }, []);
  

  const fetchData = () => {
    // change the address according to your setting
    fetch(`http://localhost:8888/wordpress/wp-json/wp/v2/posts/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  };

  return (
    <div>
        {post && (
            <>
            <h1>{post.title.rendered}</h1>
            <div>{post.content.rendered}</div>
            </>
        )}
    </div>
  );
};

export default Post;
