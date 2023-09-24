import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [timeSpent, setTimeSpent] = useState(0)

  const handleAddToBookmark = blog =>{
    setBookmarks([...bookmarks,blog])
  }

  const handleSpentTime=(time,title) =>{

    setTimeSpent(timeSpent+time)

    setBookmarks(bookmarks.filter(bookmark => bookmark!=title))

  }

  return (
    <>

      <Header/>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleSpentTime={handleSpentTime}></Blogs>  
        <Bookmarks bookmarks={bookmarks} timeSpent={timeSpent}/>      
      </div>



    </>
  )
}

export default App
