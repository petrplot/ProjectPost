import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Post = () => {

    const[post, setPost] = useState({})
    

    const getPost = async() => {
        const id = window.location.pathname 
        const res = await fetch('http://localhost:5000/api/post' + id)
        const result = await res.json()
        setPost(result)   
    }

    useEffect(
        ()=>getPost()
    ,[])

    return (
        <>
            <div className='card'>
            <div className='card__block'>
                <div className='card__title'>
                    <h1>{post.title}</h1>
                    
                </div>
                <div className='card__text'>
                    {post.text}
                </div>
                <div className='card__img'>
                    {post.img?
                        <img 
                        src={`http://localhost:5000/${post.img}`}
                         alt=''
                         />
                         :
                         '<!фото отсутствует!>'
                    }
                </div>
                <div className='card__date'>{post.date}</div>
                <div className='card__author'>{post.author}</div>
                
            </div>
        </div>

            <Link to={'/'}> На главную</Link>
        </>
    )
}

export default Post
