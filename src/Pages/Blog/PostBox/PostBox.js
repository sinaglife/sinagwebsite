import React from "react";

import classes from "./PostBox.module.scss";
import { Link } from "@reach/router";

// guía de tarjeta -> https://codepen.io/carlita712/pen/mNLzye

const PostBox = ({ postData }) => {
  console.log(postData)
  return (

    <Link to= {"/blog/"+postData.slug}>
      <div className={classes.card}>
        <div className={classes.imgAvatar}>
          {/* imagen del circulito */}
        </div>
          <div className={classes.cardText} href=''>
            <div className={classes.portada} style={{backgroundImage: `url(${postData.acf.post_lobbyImage.url})`}}>
            </div>
            <div className={classes.titleTotal}>   
              <div className={classes.title}>{postData.acf.post_upper_title}</div>
              <h2>{postData.acf.post_title}</h2>
              <div className={classes.desc}>{postData.acf.post_summary}</div>
                {/* <div className={classes.actions}>
                  <button><i className={classes.far fa-heart}></i></button>
                  <button><i className={classes.far fa-envelope}></i></button>
                  <button><i className={classes.fas fa-user-friends}></i></button>
                  </div> */}
            </div> 
          </div>
      </div>
    </Link>








    // <Link className={classes.PostContainer} to={"/blog/" + postData.slug}>
    //   <div className={classes.PostCard}>
    //     <div className={classes.PostImgBox}>
    //       <img src={postData.acf.post_lobbyImage.url} />
    //     </div>
    //     <div className={classes.PostContent}>
    //       <h2>{postData.acf.post_title}</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    //         suscipit tristique elit quis laoreet.
    //       </p>
    //     </div>
    //   </div>
    // </Link>
    );

};

export default PostBox;
