import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Blog.module.scss";

import PostBox from "./PostBox/PostBox";

const Blog = (props) => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://39570618.servicio-online.net/API/wp-json/wp/v2/posts`)
      .then((resp) => {
        console.log(resp)
        let postsArray = resp.data;
        postsArray = postsArray.concat(postsArray);
        postsArray = postsArray.concat(postsArray);
        postsArray = postsArray.concat(postsArray);
        setBlogData(postsArray);
      });
  }, [props]);

  return blogData ? (
    <div className={classes.Blog}>
      <h2 className={classes.BlogTitle}>Blog</h2>
      <p className={classes.BlogDescription}>
        Los mejores artículos sobre el cuidado de tu ser:
      </p>
      <div className={classes.PostFlexContainer}>
        {blogData.map((post) => {
          return <PostBox key={post.acf.post_title} postData={post} />;
        })}
      </div>
    </div>
  ) : null;
};

export default Blog;
