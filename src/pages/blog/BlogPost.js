import React,{Fragment, useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading"
import uri from "../../utils/uri.utils"
import classes from "./BlogPost.module.scss";

const BlogPost = (props)=> {

    const [postData, setPostData] = useState();
    const [postRows, setPostRows] = useState(null);
    const [maxRows, setMaxRows] = useState(0);
    const params = useParams();

    useEffect(()=>{
        axios
        .get(`${uri.blog}`)
        .then((res)=>{
            console.log(res.data)
            let dataArray = res.data.filter((post)=>{
        
                return post.slug === params.slug;
            });

            setPostData(dataArray[0]);
           
        });
    }, [props, params.slug]);
    
    useEffect(()=>{
        if(postData){
             let maxI = 0;

            for(let key in postData.acf){
                if(key[key.length - 1] > 0){
                    maxI = key[key.length - 1];
                }
            }

            let count = maxI;

            for(let i = maxI; i > 0; i--){
                if(
                    postData.acf["post_parahraph" + i] ||
                    postData.acf["post_image" + i]
                ){
                    count = i;
                    break;
                }
            }
            setMaxRows(count);
        }
    }, [postData]);

    useEffect(()=>{
        if (maxRows) {
            const countArray = new Array(maxRows).fill(1);
            const rows = countArray.map((_, i)=>{
                i++;
                return (
                    <Fragment key={"Post Row" + i}>
                        {
                        postData.acf["post_paragraph" + i] ? (
                        <Fragment>
                            {
                                postData.acf["post_paragraph_position" + i] === "Izquierda"? (
                                    <div className={classes.postRow}>
                                        <div className={classes.postFix}>
                                            <p className={classes.postParagraph}>
                                                {postData.acf["post_paragraph" + i]}
                                            </p>
                                        </div>
                                        {postData.acf["post_image" + i] ? (
                                            <img 
                                            alt={postData.acf["post_image" + i].alt}
                                            src={postData.acf["post_image" + i].url}
                                            className={classes.rowImg}
                                            />
                                        ): null}
                                    </div>
                                ): (
                                    <div className={classes.postRow}>
                                        {postData.acf["post_image" + i] ? (
                                            <img
                                            alt={postData.acf["post_image" + i].alt}
                                            src={postData.acf["post_image" + i].url}
                                            className={classes.rowImg}
                                            />
                                        ): null}
                                        <div className={classes.postFix}>
                                            <p className={classes.postParagraph}>
                                                {postData.acf["post_paragraph" + i]}
                                            </p>
                                        </div>
                                    </div>
                                )}
                        </Fragment>
                                     
                        ) : (
                            <Fragment>
                                {postData.acf["post_image" + i] && (
                                    <div className={classes.postRow}>
                                        <img
                                        alt={postData.acf["post_image" + i].alt}
                                        className={classes.rowImgComplete}
                                        src={postData.acf["post_image" + i].url}
                                        />
                                    </div>
                                )}
                            </Fragment>
                            )
                        
                        }
                    </Fragment>
                );
            });
            setPostRows(rows);
        }
    }, [maxRows]);

    return postData ? (
        <div className={classes.postContainer}>
            <h2 className={classes.postTitle}>{postData.acf.post_title}</h2>
            <h4 className={classes.postSubTitle}>
            {postData.acf.post_title2 && postData.acf.post_title2}
            </h4>
            {postRows}
        </div>
    ) : <Loading/>;
};

export default BlogPost;


/*

  axios
        .get(`https://39570618.servicio-online.net/API/wp-json/wp/v2/posts/?per_page=100`)
        .then((res)=>{
            let dataArray = res.data.filter((post)=>{
        
                return post.slug === params.slug;
            });
            console.log(dataArray)
            setPostData(dataArray[0]);

*/