
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'
function App() {

  const [bookmarks,setBookMarks]=useState([])
  
  const handleAddToBookmarks = blog=>{
    const newBookMarks=[...bookmarks,blog];
    setBookMarks(newBookMarks);
    console.log(bookmarks)
  }

  return (
    <>
    
     <Header/>
     <div className='md:flex max-w-5xl mx-auto'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
     <Bookmarks bookmarks={bookmarks}/>
     </div>
      
    </>
  )
}

export default App
