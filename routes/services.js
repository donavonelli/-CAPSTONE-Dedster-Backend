// imports
const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/', controller.services.index);
router.get('/:id', controller.services.show);
router.post('/', controller.services.create);
router.put('/:id', controller.services.update);
router.delete('/:id', controller.services.destroy);

// exports
module.exports = router;