// lines below are setting up the app to run.
// they are libraries that are required to do what the app is going to do
const express = require('express');
const bodyparser = require('body-parser');
const server = express();
const mustache = require('mustache-express');
const toCompleted = [];


// setting up mustache
server.engine('mustache', mustache());
// tells mustache where to look for .mustache files
server.set('views', './templates');
// tells the browser what templating engine to use
server.set('view engine', 'mustache');
// puts the information from the form into parts you can use
server.use(bodyparser.urlencoded({ extended: false }));

// array to hold all of the todo items
// the things it holds are objects
// each object has a property called task
// task is a string that says what the todo is
const todos = [

    {task: 'wash the car'},
    {task: 'do homework'},
    {task: 'food shopping'},
    {task: 'laundry'},
    {task: 'dishes'}

];


// sets up a "get" route at the address localhost:3004/
// res is the response object it handles what to send back to the browser
// req is the request object which brings in information from the browser
// the function below shows the index.mustache when the user goes to localhost:3004/
// it will use the information after the comma to replace the mustache stuff
server.get("/", function (req, res) {
  res.render('index', { todos: todos });
});


//this is a "post" route that gives us information from the form on index.mustache
// its job is to take information and add that to the todos array
server.post("/", function (req, res) {
  todos.push(
    {task:req.body.addToList}
  );
  res.redirect('/');
})

//
//
// server.post('/new', function (req, res) {
  //
  // if (
  //   req.body.task.length > 0
  // ) {
  //   // get the form info
  //   // add it to the array
  //   todos.push({
  //     task: req.body.name.toCompleted();
  //
  //   });
  // }
  //
  //
  //















server.listen(3004, function () {
  console.log("hi");
});
