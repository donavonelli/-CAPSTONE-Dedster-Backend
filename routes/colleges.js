const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/', controller.colleges.index);
router.get('/:id', controller.colleges.show);
router.post('/', controller.colleges.create);
router.put('/:id', controller.colleges.update);
router.delete('/:id', controller.colleges.destroy);

// exports
module.exports = router;
