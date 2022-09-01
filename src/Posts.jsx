import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //Get JSON from wordpress with posts etc.

  const fetchData = () => {
    fetch("http://localhost/wp-json/wp/v2/posts")
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

  return (
    //Render title and content, dangerouslySetInnerHTML renders all types of content
    <>
      <h1>Blog</h1>
      <div className="container">
        {posts.length > 0 && (
          <>
            {posts.map((post) => (
              <div className="card" key={post.id}>
                <div className="card__header">
                  {/* <img
                    src={post.guid.rendered}
                    alt="card__image"
                    className="card__image"
                    width="600"
                  /> */}
                </div>
                <div className="card__body">
                  <span className="tag tag-blue">Category</span>
                  <h4>{post.title.rendered}</h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    width="600"
                  ></div>
                  {/* <p>{post.excerpt.rendered}</p> */}
                </div>
                <div className="card__footer">
                  <div className="user">
                    <div className="user__info">
                      <h5>Name</h5>
                      <small>{post.date}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Posts;
