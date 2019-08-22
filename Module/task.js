var Repo = require("../Module/taskRepository");

var Task = function(data) {
  this.name = data.name;
  this.completed = false;
};

//className.prototype.method Name=function(arguments{})
Task.prototype.complete = function() {
  console.log("completing task: " + this.name);
  this.completed = true;
};
Task.prototype.save = function() {
  console.log("saving Task: " + this.name);
  Repo.save(this); //this is the task.
};

module.exports = Task;
