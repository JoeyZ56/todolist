const express = require('express');
const router = express.Router();
const todoctrl = require('../../controllers/api/todos');

//Order masters (index, delete, Update, create, Show)

// Index /api/todos (root route)
router.get('/', todoctrl.indexNotComplete, todoctrl.jsonTodos);
//Index /api/todos/completed
router.get('/completed', todoctrl.indexComplete, todoctrl.jsonTodos);
//Delete /apo/todos/:id
router.delete('/:id', todoctrl.destroy, todoctrl.jsonTodo);
//Update /api/todos/:id
router.put('/:id', todoctrl.update, todoctrl.jsonTodo);
//Create /api/todos
router.post('/', todoctrl.create, todoctrl.jsonTodo);
//Show /api/todos/:id
router.get('/:id', todoctrl.show, todoctrl.jsonTodo);

module.exports = router;
