//Prototype:An encapsulation of properties that an object links to

var Task = function(name) {
  this.name = name;
  this.completed = false;
};

//className.prototype.methodName=function(arguments{})
Task.prototype.complete = function(arguments) {
  console.log("completing task: " + this.name);
  this.completed = true;
};
Task.prototype.save = function() {
  console.log("saving Task: " + this.name);
};

module.exports = Task;
