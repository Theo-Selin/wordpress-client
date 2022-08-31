import React, { useEffect, useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState([]);
  //Get JSON from wordpress with posts etc.
  const fetchData = () => {
    fetch("http://localhost:8888/wordpress/wp-json/wp/v2/tags")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        setTags(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    //Render title and content, dangerouslySetInnerHTML renders all types of content

    <div>
        {tags.map((tag, index)=>{
            return(
                <div key={index}>
                    {tag.name}
                </div>
            )
        })}
    </div>
  );
};

export default Tags;
