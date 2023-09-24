/* eslint-disable react/prop-types */

const Blog = ({blog,handleAddToBookmark,handleSpentTime}) => {

    const {title,author,cover,hashtags,reading_time,posted_date,author_img} = blog

    return (
        <div className="mb-20">

            <img className="w-full mb-8" src={cover} alt="" />
            <div className="flex justify-between mb-4">

                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>

                    <span>{reading_time} min read </span>
                    <button onClick={()=>handleAddToBookmark(title)}><i className="fa-solid fa-bookmark"></i></button>
                </div>


            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    // eslint-disable-next-line react/prop-types
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash} </a></span>)
                }

            </p>
            <button onClick={()=>handleSpentTime(reading_time)}>Mark as read</button>
            
        </div>
    );
};

export default Blog;