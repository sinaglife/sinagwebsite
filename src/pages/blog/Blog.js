import axios from 'axios';
import React, {useState, useEffect} from 'react';
import classes from "./Blog.module.scss";
import PostBox from './PostBox';
import Loading from "../../components/Loading"
import uri from "../../utils/uri.utils"


const Blog = (props)=> {

    const [blogData, setBlogData] = useState(null);

    useEffect(()=>{
        axios
            .get(`${uri.blog}`)
            .then((res)=>{
                setBlogData(res.data)
            });
            
    }, [props]);

    return blogData  ? (
        <div className={classes.blog}>
            <h1 className={classes.blogTitle}>Blog</h1>
            <p className={classes.blogParagraph}>
                Los mejores artículos sobre el cuidado de tu ser:
            </p>
            <div className={classes.postBoxContainer}>
                {
                  blogData.length > 0 &&  blogData.map((post)=>{
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
