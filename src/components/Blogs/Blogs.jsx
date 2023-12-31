import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/blog";

const Blogs = ({handleAddToBookmark,handleSpentTime}) => {

    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('./blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">

            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blogs.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleSpentTime={handleSpentTime}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;