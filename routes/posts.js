// imports
const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/', controller.posts.index);
router.get('/:id', controller.posts.show);
router.post('/', controller.posts.create);
router.put('/:id', controller.posts.update);
router.delete('/:id', controller.posts.destroy);

// exports
module.exports = router;