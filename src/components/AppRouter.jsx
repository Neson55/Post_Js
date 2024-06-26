import React, { useContext } from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error"
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import { AuthContext } from '../context/index';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading) {
    return <Loader/>
  }
  
  return (
    
      isAuth 
      ?
      <Routes>
       <Route path="/posts" element={<Posts />} /> 
       <Route path="/about" element={<About />} />
       <Route path="/posts/:id" element={<PostIdPage />} />
       <Route path="" element={<Posts />} />
       <Route path="*" element={<Error />} />
       <Route path='*' element={<Navigate to='/error'  />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      :
      <Routes>
      <Route path="/posts" element={<Login />} /> 
       <Route path="/about" element={<Login />} />
       <Route path="/posts/:id" element={<Login />} />
       <Route path="" element={<Login />} />
       <Route path="*" element={<Login />} />
       <Route path='*' element={<Navigate to='/login'  />} />
       <Route path="/login" element={<Login />} />
       </Routes>
  );
}

export default AppRouter;

