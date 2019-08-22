var task = {
  title: "task creation again using a function",
  description: "learn how to create task"
};
Object.defineProperty(task, "toString", {
  value: function() {
    return this.title + " " + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false
});
Object.defineProperty(task, "toSring", {
  enumerable: true
});
task.toString = "hi";
console.log(Object.keys(task));
