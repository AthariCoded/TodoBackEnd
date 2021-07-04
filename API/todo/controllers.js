let todos = require("../../todos");

exports.todosFetch = (req, res) => {
  res.json(todos);
};

//-----------------------------------------\\

exports.createTodo = (req, res) => {
  // generate ID
  const index = todos.length;
  const id = todos[index - 1].id + 1;

  const newTodo = {
    id,
    name: "",
    ...req.body,
  };
  // .push() newProduct onto cookies
  todos.push(newTodo);
  // response: 201 CREATED
  res.status(201).json(newTodo);
};

//-----------------------------------\\
exports.deleteTodo = (req, res) => {
  const { todoId } = req.params;

  const foundTodo = todos.find((todo) => todo.id === +todoId);

  if (foundTodo) {
    todos = todos.filter((todo) => todo.id !== +todoId);
    res.status(204).end(); // NO Content
  } else {
    //  give back response 404 todo Not Found
    res.status(404).json({ message: "Todo task Not Found." });
  }
};
//------------------------------------------\\
exports.updateFinish = (req, res) => {
  const { todoId } = req.params;

  const foundTodo = todos.find((todo) => todo.id === +todoId);

  if (foundTodo) {
    // update todo
    foundTodo.done = !req.body.done;

    res.status(204).end();
  } else {
    //  give back response 404 todo Not Found
    res.status(404).json({ message: "Product Not Found." });
  }
};
