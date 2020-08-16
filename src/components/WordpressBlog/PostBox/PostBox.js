import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

import classes from "./PostBox.module.scss";

import WordpressPost from "../PostBox/PostBox";

const WordpressBlog = ({ postData }) => {
  console.log(postData);
  return (
    <div className={classes.PostBoxContainer}>
      <Link to={"/blog/" + postData.slug}>
        <h4>{postData.acf.post_title}</h4>
        <img src={postData.acf.post_lobbyImage.url} />
      </Link>
    </div>
  );
};

export default WordpressBlog;
