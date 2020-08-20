import React from "react";

import classes from "./PostBox.module.scss";

// guía de tarjeta -> https://codepen.io/carlita712/pen/mNLzye

const PostBox3 = ({ postData }) => {
  console.log(postData);
  return (

    <div className={classes.card}>
      <div className={classes.imgAvatar}>
        {/* imagen del circulito */}
      </div>
        <div className={classes.cardText}>
          <div className={classes.portada} style={{backgroundImage: `url(${postData.acf.post_lobbyImage.url})`}}>
          </div>
          <div className={classes.titleTotal}>   
            <div className={classes.title}>Ant Collector</div>
            <h2>{postData.acf.post_title}</h2>
            <div className={classes.desc}>Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.</div>
              {/* <div className={classes.actions}>
                <button><i className={classes.far fa-heart}></i></button>
                <button><i className={classes.far fa-envelope}></i></button>
                <button><i className={classes.fas fa-user-friends}></i></button>
                </div> */}
          </div> 
        </div>
    </div>









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

export default PostBox3;
