import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import {React,useState} from 'react';

function App() {

  
  const [post, setPost] = useState({})
  const getData =(blog) =>{
    setPost(blog)
  }
  return (
 <div>
  <div className="container ">
    <Routes>
      <Route path="/" element={<HomePage data={getData}/>}/>
      <Route path = "/blog/:id" element={<BlogPost data={post}/>}/>
    </Routes>
    </div>
 </div>
  )
}

export default App;
