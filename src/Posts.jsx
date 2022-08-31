import React, { useEffect, useState } from "react";
import Tags from './Tags'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //Get JSON from wordpress with posts etc.

  const fetchData = () => {
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
            <div className="post" key={post.id}>
              <h1>{post.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
              <Tags/>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
