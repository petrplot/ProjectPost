import {Routes, Route} from 'react-router-dom'
import PostList from './pages/PostList'
import Post from './pages/Post'
import React from 'react'
import CreatePost from './pages/CreatePost'

const Router = () => {
    return (
        <Routes>
           <Route path="/" element={<PostList/>}/>
           <Route path="/:id" element={<Post/>}/>
           <Route path="/add" element={<CreatePost/>}/>
        </Routes>
    )
}

export default Router
