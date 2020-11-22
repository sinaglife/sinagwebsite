import React, { useEffect, useState } from "react";
import axios from "axios";
import Auxi from "../../../hoc/Auxi";

import { useParams } from "@reach/router";

import classes from "./BlogPost.module.scss";

const BlogPost = (props) => {
  const [postData, setPostData] = useState();
  const [postRows, setPostRows] = useState(null);
  const [maxRows, setMaxRows] = useState(0);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://39570618.servicio-online.net/API/wp-json/wp/v2/posts/?per_page=100`)
      .then((resp) => {
        let postsArray = resp.data;
        postsArray = resp.data.filter((post) => {
          return post.slug === params.slug;
        });
        console.log(postsArray);
        setPostData(postsArray[0]);
      });
  }, [props, params.slug]);

  useEffect(() => {
    if (postData) {
      console.log(postData)

      let maxI = 0;
      for (let key in postData.acf) {
        if (key[key.length - 1] > 0) {
          maxI = key[key.length - 1];
        }
      }

      let count = maxI;

      for (let i = maxI; i > 0; i--) {
        if (
          postData.acf["post_parahraph" + i] ||
          postData.acf["post_image" + i]
        ) {
          count = i;
          break;
        }
      }

      setMaxRows(count);
    }
  }, [postData]);

  useEffect(() => {
    if (maxRows) {
      console.log(maxRows)
      const countArray = new Array(maxRows).fill(1);
      console.log(countArray)

      const rows = countArray.map((_, i) => {
        i++;
        return (
          <Auxi key={"Post Row" + i}>
            {postData.acf["post_paragraph" + i] ? (
              <Auxi>
                {postData.acf["post_paragraph_position" + i] === "Izquierda" ? (
                  <div className={classes.PostRow}>
                    <div className={classes.Pfix}>
                      <p className={classes.PostParagraph}>
                        {postData.acf["post_paragraph" + i]}
                      </p>
                    </div>
                    {postData.acf["post_image" + i] ? (
                      <img
                        alt={postData.acf["post_image" + i].alt}
                        className={classes.rowImg}
                        src={postData.acf["post_image" + i].url}
                      ></img>
                    ) : null}
                  </div>
                ) : (
                  <div className={classes.PostRow}>
                    {postData.acf["post_image" + i] ? (
                      <img
                        alt={postData.acf["post_image" + i].alt}
                        className={classes.rowImg}
                        src={postData.acf["post_image" + i].url}
                      ></img>
                    ) : null}
                    <div className={classes.Pfix}>
                      <p className={classes.PostParagraph}>
                        {postData.acf["post_paragraph" + i]}
                      </p>
                    </div>
                  </div>
                )}
              </Auxi>
            ) : (
              <Auxi>
                {postData.acf["post_image" + i] && (
                  <div className={classes.PostRow}>
                    <img
                      alt={postData.acf["post_image" + i].alt}
                      className={classes.RowImgComplete}
                      src={postData.acf["post_image" + i].url}
                    />
                  </div>
                )}
              </Auxi>
            )}
          </Auxi>
        );
      });
      setPostRows(rows);
    }
  }, [maxRows]);

  return postData ? (
    <div className={classes.PostContainer}>
      <h2 className={classes.PostTitle}>{postData.acf.post_title}</h2>
      <h4 className={classes.PostSecondaryTitle}>
        {postData.acf.post_title2 && postData.acf.post_title2}
      </h4>
      {postRows}
    </div>
  ) : null;
};

export default BlogPost;
