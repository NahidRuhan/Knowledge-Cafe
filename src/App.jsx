import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>

      <Header/>
      <div className='md:flex'>
        <Blogs/>  
        <Bookmarks/>      
      </div>



    </>
  )
}

export default App
