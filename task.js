//Prototype:An encapsulation of properties that an object links to

var Task = function(name) {
  this.name = name;
  this.completed = false;

  this.complete = function() {
    console.log("completing task: " + this.name);
    this.completed = true;
  };
  this.save = function() {
    console.log("saving Task: " + this.name);
  };
};
//className.prototype.methodName=function(arguments{})
Task.prototype.complete = function(arguments) {
  console.log("completing task: " + this.name);
  this.completed = true;
};
Task.prototype.save = function() {
  console.log("saving Task: " + this.name);
};
var task1 = new Task("create a demo for constructor");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singleton");
var task4 = new Task("create a demo for prototype");

task1.complete();
task2.save();
task3.save();
task4.save();
/*completing task: create a demo for constructor
saving Task: create a demo for modules
saving Task: create a demo for singleton
saving Task: create a demo for prototype* */
