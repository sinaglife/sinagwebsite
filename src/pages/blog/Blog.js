import axios from 'axios';
import React, {useState, useEffect} from 'react';
import classes from "./Blog.module.scss";
import PostBox from './PostBox';
import Loading from "../../components/Loading"

const Blog = (props)=> {

    const [blogData, setBlogData] = useState(null);

    useEffect(()=>{
        axios
            .get(`https://39570618.servicio-online.net/API/wp-json/wp/v2/posts/?per_page=100`)
            .then((res)=>{
                let dataArray = res.data;
                setBlogData(dataArray);
            });
    }, [props]);

    return blogData ? (
        <div className={classes.blog}>
            <h1 className={classes.blogTitle}>Blog</h1>
            <p className={classes.blogParagraph}>
                Los mejores artículos sobre el cuidado de tu ser:
            </p>
            <div className={classes.postBoxContainer}>
                {
                    blogData?.map((post)=>{
                        return <PostBox 
                                key={post.acf.post_title} 
                                postData={post}
                                />;
                    })
                }
            </div>
        </div>
    ): <Loading/>;
};

export default Blog
