import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')

    const addPost = async() =>{
        const post = {
            title:title,
            text:text,
            author:author
        }
        await fetch('http://localhost:5000/api/post',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(post)
        })
         
       
        
    }
    return (
        <div>
            <form>
                <input 
                placeholder='title'
                value={title}
                onChange={e=>setTitle(e.target.value)}
                />
                
                <input 
                placeholder='text'
                value={text}
                onChange={e=>setText(e.target.value)}
                />
                <input 
                placeholder='author'
                value={author}
                onChange={e=>setAuthor(e.target.value)}
                />
                <button onClick={addPost}>Создать</button>
            </form>
            <Link to={'/'}>На главную</Link>
        </div>
    )
}

export default CreatePost
