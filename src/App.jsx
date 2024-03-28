import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {

  const [title, setTitle] = useState([]);
  const [read,SetRead] = useState(0);

  const handleBookmark = (titleProp) => {
    setTitle([...title,titleProp]);
  };

  const handleRead = (titleProp,timeProp) => {
    const filteredTitle = title.filter(title => {
      return title != titleProp;
    });
    setTitle(filteredTitle)
    SetRead(read+timeProp);
  }


  return (
    <div className='max-w-5xl mx-auto py-10 space-y-7'>
      <Header></Header>
      <div className='flex'>
        <div className='basis-2/3'><Blogs handleBookmark={handleBookmark} handleRead={handleRead}></Blogs></div>
        <div className='basis-1/3'><Bookmarks title={title} read={read}></Bookmarks></div>
      </div>
    </div>
  )
}

export default App
