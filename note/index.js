/** 实现 call apply bind */
Function.prototype.myCall = function (context) {
  const arg = [...arguments].slice(1);
  context = context || window;
  const fn = this;
  context.fn = fn;
  const res = context.fn(arg);
  delete context.fn;
  return res;
};
Function.prototype.myApply = function (context) {
  const args = [...arguments][1];
  context = context || window;
  const fn = this;
  context.fn = fn;
  const res = context.fn(...args);
  delete context.fn;
  return res;
};
Function.prototype.myBind = function (context) {
  const args = [...arguments].slice(1);
  const fn = this;
  return function Fn() {
    return fn.call(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
function getName() {
  return `${this.name},${[...arguments]}`;
}
/*
const myCall = getName.myCall({ name: "myCall" }, [1, 2], 3);
const call = getName.call({ name: "call" }, [1, 2], 3);
console.log({ myCall, call });
const myApply = getName.myApply({ name: "myApply" }, [1, 2], 3);
const apply = getName.apply({ name: "apply" }, [1, 2], 3);
console.log({ myApply, apply });
const myBind = getName.myBind({ name: "myApply" }, [1, 2], 3);
const bind = getName.bind({ name: "apply" }, [1, 2], 3);
console.log({ myBind: myBind(), bind: bind() });
*/
