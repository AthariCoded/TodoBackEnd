const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoutes = require("./API/todo/routes");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//=============== Todo Routes ===============\\
app.use("/todos", todoRoutes);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
