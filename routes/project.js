const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

router.post('/create', projectController.create);
router.get('/:id', projectController.project);
router.post('/:id', projectController.createIssue);
router.get('/delete/:id', projectController.delete);

module.exports = router;
