import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost]=useState({});
  const [comments, setComments]=useState([]);
  const [fetchPostById, isLoading, error] = useFetching ( async(id)=> {
    const response = await PostService.getById(id)
    setPost(response.data);
  })
  const [fetchComments, isComLoading, comError] = useFetching ( async(id)=> {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data);
  })
    
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  },[])
  
  return (
    <div>
     <h1 style={{display:'flex', justifyContent:'center'}}>Вы открыли страницу поста с ID = {params.id} </h1>
      {isLoading
      ? <Loader />
      : <div style={{border: '1px solid black', padding: '10px', margin: '20px', borderRadius:'5px', boxShadow:'5px 5px 10px rgba(0, 0, 0, 0.25)', display:'flex', justifyContent:'center', fontSize:'20px'}}>{post.id}. {post.title}</div>
      }
  <h1 style={{display:'flex', justifyContent:'center'}}>
    Коментарии
  </h1>
      {isComLoading
      ? <Loader />
      :<div>{comments.map(comm => 
        <div style={{border: '1px solid black', padding: '10px', margin: '20px', borderRadius:'5px', boxShadow:'5px 5px 10px rgba(0, 0, 0, 0.25)'}}> 
        <h5 style={{color:'blue', marginBottom:'10px'}}>{comm.email}</h5>
        <div>{comm.body}</div>
        </div>
      )}
      </div>
      }
    </div>
  );
}

export default PostIdPage;