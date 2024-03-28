import { useState } from 'react';
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [title, setTitle] = useState([]);
  const [read,SetRead] = useState(0);


  const handleBookmark = (titleProp) => {
    const alreadyExists = title.find(title=> titleProp===title);
    if(alreadyExists!=titleProp) setTitle([...title,titleProp]);
    else toast("Already Bookmarked!");
  };

  const handleRead = (titleProp,timeProp) => {
    const filteredTitle = title.filter(title => {
      return title != titleProp;
    });
    setTitle(filteredTitle)
    const doesExist = title.filter((title)=> title==titleProp);
    if(doesExist.length!=0)SetRead(read+timeProp);
    else toast("Not bookmarked!");
  }


  return (
    <div className='max-w-5xl mx-auto py-10 space-y-7'>
      <Header></Header>
      <div className='flex'>
        <div className='basis-2/3'><Blogs handleBookmark={handleBookmark} handleRead={handleRead}></Blogs></div>
        <div className='basis-1/3'><Bookmarks title={title} read={read}></Bookmarks></div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App
