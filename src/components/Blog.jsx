/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Blog = ({ blog, handleBookmark, handleRead }) => {
  const { cover, title, img, author, post, time, hashtags } = blog;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <div>
                <img className="w-12" src={img} alt="" />
              </div>
              <div>
                <p className="font-bold">{author}</p>
                <span>{post}</span>
              </div>
            </div>
            <div>
              <p className="flex gap-2">
                {time} min read{" "}
                <span onClick={()=>handleBookmark(title)} className="hover:cursor-pointer">
                  <i className="fa-solid fa-bookmark"></i>
                </span>
              </p>
            </div>
          </div>

          <h1 className="font-bold text-2xl">{title}</h1>
          <div className="flex gap-3">
            {hashtags.map((tag, ind) => (
              <span key={ind}>#{tag}</span>
            ))}
          </div>
          <p onClick={()=>handleRead(title,time)} className=" text-red-500 hover:cursor-pointer">Mark as read</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
