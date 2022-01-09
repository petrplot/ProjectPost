const Router = require('express')
const router = new Router()
const postController = require('../controller/postController')

router.get('/', postController.getAll)
router.get('/:id', postController.getById)
router.post('/', postController.create)
router.delete('/:id', postController.deletePost)
router.put('/:id', postController.updatePost)

module.exports = router