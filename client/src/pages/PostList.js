import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import CardPost from '../components/CardPost'

const PostList = () => {

const [posts, setPosts] = useState([])

    const getPost = async() => {
        const  res = await fetch('http://localhost:5000/api/post')
        const data = await res.json()
        setPosts(data)
    }

    const deletePost = async(id) => {
        const  res = await fetch('http://localhost:5000/api/post/'+id,
        {
            method:'DELETE',  
        })
        const result = await res.json()
        console.log(result);
    }

    useEffect(()=>{
            getPost()
            } 
    ,[deletePost])

    return (
        <div>
            
            <h1>Посты</h1>
            
                {
                    posts.map((post) => {
                    
                       return (
                           <div key={post._id}>
                                <NavLink  to={`/${post._id}`}>
                                    <CardPost  post={post}/>
                                    
                                </NavLink>
                                <button 
                                    
                                    onClick={()=>{
                                        deletePost(post._id)
                                    }}
                                >
                                    удалить пост
                                </button>
                            </div>
                       )
                       
                   })
                }
                <Link to={'/add'}>Добавить пост</Link>
            
        </div>
    )
}

export default PostList
