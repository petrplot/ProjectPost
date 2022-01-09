const Post = require('../models/Post')
const mongoose = require('mongoose')

class PostController{

   async create(req, res){
        try {

            const post = await Post.create({
                title: req.body.title,
                text: req.body.text,
                author: req.body.author
            })
            res.json(post)
            
        } catch (e) {
            console.log(e);
        }
    }

    async getAll(req, res){
        try {
             const post = await Post.find()
             res.json(post)
        } catch (e) {
            console.log(e);
        }
    }

    async getById(req, res){
        try {
            const id = req.params.id
            const post = await Post.findById(id)
            res.json(post)
        } catch (e) {
            console.log(e);
        }
    }

    async deletePost(req, res){
        try {
            const id = req.params.id
            const post = await Post.findByIdAndDelete(id)
            res.json(post)
        } catch (e) {
            console.log(e);
        }
    }

    async updatePost(req, res){
        try {
            const id = req.params.id
            
            const updatePost = await Post.findByIdAndUpdate(id, {
                title: req.body.title,
                text: req.body.text,
                author: req.body.author
            }, {new:true})
            res.json(updatePost)   
        } catch (e) {
            console.log(e);
        }

    }

}

module.exports = new PostController()