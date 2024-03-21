import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import Error from "../pages/Error"

   const  MyRoutes = () => {
     return ( <Routes>
     <Route path="/posts" element={<Posts />} /> 
     <Route path="/about" element={<About />} />
     <Route path="/posts/:id" element={<PostIdPage />} />
     <Route path="" element={<Posts />} />
     <Route path="*" element={<Error />} />
     <Route path='*' element={<Navigate to='/error'  />} />
     </Routes>
       )
   }


export default MyRoutes



