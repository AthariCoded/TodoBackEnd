const express = require("express");

const {
  todosFetch,
  createTodo,
  deleteTodo,
  updateFinish,
} = require("./controllers");

const router = express.Router();

// get todos
router.get("/", todosFetch);

// Create Route
router.post("/", createTodo);

// Delete Route
router.delete("/:todoId", deleteTodo);

// Update Route
router.put("/:todoId", updateFinish);

module.exports = router;
