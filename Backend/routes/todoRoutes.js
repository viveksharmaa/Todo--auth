const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.post("/", auth, createTodo);
router.get("/", auth, getTodos);
router.put("/:id", auth, updateTodo);
router.delete("/:id", auth, deleteTodo);

module.exports = router;