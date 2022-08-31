import React, { useEffect, useState } from "react"

const Posts = () => {
  const [posts, setPosts] = useState([])

  const fetchData = () => {
    fetch("http://localhost/wp-json/wp/v2/posts")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(posts)

  return (
    <div>
      {posts.length > 0 && (
        <>
            {posts.map(post => (
            <div key={post.id}>
                <h1>{post.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default Posts