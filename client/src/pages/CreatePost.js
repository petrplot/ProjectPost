import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    }

    const addPost = async() =>{

        const post =  new FormData()
        post.append('title',title)
        post.append('text',text)
        post.append('author',author)
        post.append('img',file)

        
        await fetch('http://localhost:5000/api/post',{
            method:'POST', 
            body:post
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
                <div>
                    <input 
                    type="file"
                    onChange={selectFile}
                    />
                </div>
                <button onClick={addPost}>Создать</button>
            </form>
            <Link to={'/'}>На главную</Link>
        </div>
    )
}

export default CreatePost
