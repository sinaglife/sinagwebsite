import React from "react";
import { Link } from "@reach/router";

import classes from "./PostBox2.module.scss";

const PostBox2 = ({ postData }) => {
  console.log(postData);
  return (
    <Link className={classes.PostContainer} to={"/blog/" + postData.slug}>
      <div className={classes.PostCard}>
        <div className={classes.PostImgBox}>
          <img src={postData.acf.post_lobbyImage.url} />
        </div>
        <div className={classes.PostContent}>
          <h2>{postData.acf.post_title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            suscipit tristique elit quis laoreet.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostBox2;
