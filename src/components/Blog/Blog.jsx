const Blog = ({blog}) => {

    const {title,author,cover,hashtags,reading_time,posted_date,author_img} = blog

    return (
        <div>

            <img src={cover} alt="" />
            <div className="flex justify-between">

                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>

                    <span>{reading_time} min read</span>
                </div>


            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    // eslint-disable-next-line react/prop-types
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash} </a></span>)
                }

            </p>
            
        </div>
    );
};

export default Blog;