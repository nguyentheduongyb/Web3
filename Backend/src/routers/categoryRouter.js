const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const CategoryController = require('~/app/controllers/CategoryController');

router.post('/create', auth, CategoryController.create);
router.put('/update/:id', auth, CategoryController.update);
router.delete('/delete/:id', auth, CategoryController.delete);
router.get('/', auth, CategoryController.get);
module.exports = router;