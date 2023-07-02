const express = require('express');
const router = express.Router();
const chaptersController = require('../controllers/chaptersController');

router.get('/getAll',chaptersController.getAllChapters);
router.get('/:id',chaptersController.getSpecificChapterDetails);

module.exports = router;