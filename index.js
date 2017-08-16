const express = require('express');
const bodyparser = require('body-parser');
const server = express();
const mustache = require('mustache-express');

server.engine('mustache', mustache());
server.set('views', './templates');
server.set('view engine', 'mustache');

server.use(bodyparser.urlencoded({ extended: false }));

const todos = [
  {
    task: 'wash the car',
  }
];



server.get("/", function (req, res) {
  res.render('index', { todos: todos });
});

server.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})


















server.listen(3004, function () {
  console.log("");
});
