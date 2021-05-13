import axios from 'axios';
import React, {useState, useEffect} from 'react';
import classes from "./Blog.module.scss";
import PostBox from './PostBox';
import Loading from "../../components/Loading"

const Blog = (props)=> {

    const [blogData, setBlogData] = useState(null);

    useEffect(()=>{
        axios
            .get(`http://localhost:8080/api/blog`)
            .then((res)=>{
                setBlogData(res.data.data)
            });
            if(blogData) console.log(blogData)
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
