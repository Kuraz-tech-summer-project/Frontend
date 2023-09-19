import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './components/Layout';
import WishList from './pages/WishList';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>} />
         <Route path ="about" element={<About/>}/>
         <Route path ="contact" element={<Contact/>}/>
         <Route path="WishList" element={<WishList />} />
         <Route path="stor" element={<OurStore />} />
         <Route path="Blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
