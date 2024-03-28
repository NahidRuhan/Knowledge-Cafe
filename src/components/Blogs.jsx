/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmark,handleRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../public/blog.json")
      .then((result) => result.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex flex-col gap-5 items-center">
      {blogs.map((blog, ind) => (
        <Blog key={ind} blog={blog} handleBookmark={handleBookmark} handleRead={handleRead}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
