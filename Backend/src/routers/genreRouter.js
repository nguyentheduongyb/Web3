const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const GenreController = require('~/app/controllers/GenreController');

router.post('/create', auth, GenreController.create);
router.put('/update/:id', auth, GenreController.update);
router.delete('/delete/:id', auth, GenreController.delete);
router.get('/', auth, GenreController.get);
module.exports = router;