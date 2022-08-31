import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //Get JSON from wordpress with posts etc.

  const fetchData = () => {
    // change the address according to your setting
    fetch("http://localhost:8888/wordpress/wp-json/wp/v2/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(posts);

  return (
    //Render title and content, dangerouslySetInnerHTML renders all types of content

    <div>
      {posts.length > 0 && (
        <>
          {posts.map((post) => (
            <ul className="post" key={post.id}>
              <Link to={`/post/${post.id}`}><li>{post.title.rendered}</li></Link>
            </ul>
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
