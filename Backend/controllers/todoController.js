const Todo = require("../models/Todo");

// Create Todo
exports.createTodo = async (req, res) => {
  const todo = await Todo.create({
    user: req.user,
    title: req.body.title,
  });
  res.json(todo);
};

// Get Todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user });
  res.json(todos);
};

// Update Todo
exports.updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(todo);
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};