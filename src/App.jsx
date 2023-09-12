
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'
function App() {

  const [bookmarks,setBookMarks]=useState([])
  const [readingTime ,setReadingTime]=useState(0)
  // console.log(readingTime)
  const handleAddToBookmarks = blog=>{
    const newBookMarks=[...bookmarks,blog];
    setBookMarks(newBookMarks);
    // console.log(bookmarks)
  }

  const handleMarkAsRead=(id,time)=>{
    const newTime=readingTime+time;
    setReadingTime(newTime);
     console.log(readingTime)
  }
// console.log(readingTime)
  return (
    <>
    
     <Header/>
     <div className='md:flex max-w-5xl mx-auto'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
     </div>
      
    </>
  )
}

export default App
