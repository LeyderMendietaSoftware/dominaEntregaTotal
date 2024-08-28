const express = require('express');
const router = express.Router();
const tareaController = require('./controllers/tareaController');
const authenticateToken = require('./authMiddleware');

router.get('/', authenticateToken, tareaController.listarTareas);
router.post('/', authenticateToken, tareaController.createTarea);
router.put('/:id', tareaController.updateTarea);
router.delete('/:id', tareaController.deleteTarea);

module.exports = router;