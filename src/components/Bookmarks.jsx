/* eslint-disable react/prop-types */

const Bookmarks = ({title,read}) => {


    return (
        <div className="flex flex-col justify-center sticky top-5 space-y-6">
            <div className="flex justify-center border-blue-800 bg-base-300 px-4 py-3 text-blue-600 border rounded font-bold">
                <h1>Spent time on read: {read} minutes</h1>
            </div>
            <h1 className="font-bold">Bookmarked Blogs: {title.length}</h1>
            <ul>
    {
        title.map((title, ind) => <li className="bg-gray-200 p-4 mb-2 rounded font-semibold" key={ind}>{title}</li>)
    }
</ul>

        </div>
    );
};

export default Bookmarks;