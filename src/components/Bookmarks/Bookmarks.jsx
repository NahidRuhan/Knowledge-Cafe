import { useState } from "react";

const Bookmarks = ({bookmarks,timeSpent}) => {

    // const [spentTime,setSpentTime] = useState(0)


    return (
        <div className="md:w-1/3">


            <h2>Spent time on read: {timeSpent} minutes</h2>

            <h2 className="text-4xl">Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark) =><h1>{bookmark}</h1>)
            }
        </div>
    );
};

export default Bookmarks;