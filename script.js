var task = new Object();
task.title = "task creation again using a function";
task.description = "learn how to create task";
task.toString = function() {
  return this.title + " " + this.description;
};
console.log(task.toString());
