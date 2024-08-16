function myNew(func, ...args) {
  const obj = {};
  obj.__proto__ = func.prototype;
  const result = func.apply(obj, args);
  return result instanceof Object ? result : obj;
}
