Object.defineProperty(obj, "name", {
  value: "my name",
  writable: true, //means I can create constants, something that can'y be changed.
  enumerable: true, //either in a for in loop,or if I do the keys function then it will show up or it won't show up.
  configurable: true // I am not allowed to set it again to something.
});
