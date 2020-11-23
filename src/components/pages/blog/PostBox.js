import React from "react";
import classes from "./PostBox.module.scss";

import { Link } from "@reach/router";

const PostBox = ({ postData }) => {
  let blogRoute = postData.slug;
  console.log(postData.acf.post_lobbyImage.url);
  return (
    <Link to={`/blog/${blogRoute}`} style={{ textDecoration: "none" }}>
      <div className={classes.card}>
        <div
          className={classes.cardImgContainer}
          style={{
            backgroundImage: `url(${postData.acf.post_lobbyImage.url})`,
          }}
        ></div>
        <div className={classes.cardTextContainer}>
          <div className={classes.cardMainTitle}>
            {postData.acf.post_upper_title}
          </div>
          <h2>{postData.acf.post_title}</h2>
          <div className={classes.cardTextDescription}>
            {postData.acf.post_summary}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostBox;
