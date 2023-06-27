const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();
const ProductController = require('~/app/controllers/ProductController');



router.post('/create', ProductController.upload, ProductController.create);
router.put('/update/:id', auth, ProductController.update);
router.delete('/delete/:id', auth, ProductController.delete);
router.get('/', auth, ProductController.get);
module.exports = router;