const Router = require('express')
const router = new Router()

const postRout = require('./postRout')

router.use('/post', postRout)

module.exports = router