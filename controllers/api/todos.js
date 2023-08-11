const Todo = require('../../models/todo');

//hoisting the C.R.U.D. functionality (CAN NOT HOIST ARROW FUNCTIONS)
module.exports = {
	create,
	indexComplete,
	indexNotComplete,
	show,
	update,
	destroy,
	jsonTodos,
	jsonTodo
};

// jsonTodos, jsonTodo
// views controllers

// replace req with "_" if not being used in function (CAN NOT LEAVE BLANK!)

function jsonTodo(_, res) {
	res.json(res.locals.data.todo);
}

//calls multiple todos

function jsonTodos(_, res) {
	res.json(res.locals.data.todos);
}

// Create

async function create(req, res, next) {
	try {
		const todo = await Todo.create(req.body);
		res.locals.data.todo = todo;
		// next lets us know we can call the next function
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

// Read "index, show"

async function indexComplete(_, res, next) {
	try {
		const todos = await Todo.find({ completed: true });
		res.locals.data.todos = todos;
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function indexNotComplete(_, res, next) {
	try {
		const todos = await Todo.find({ completed: false });
		res.locals.data.todos = todos;
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function show(req, res, next) {
	try {
		const todo = await Todo.findById(req.params.id);
		res.locals.data.todo = todo;
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

// Update

async function update(req, res, next) {
	try {
		const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});
		res.locals.data.todo = todo;
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

// Destroy
async function destroy(req, res, next) {
	try {
		const todo = await Todo.findByIdAndDelete(req.params.id);
		res.locals.data.todo = todo;
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
