const fn = () => {
  return "llllll";
};
const target = {
  h: { name: "wad" },
  j: [1, 2, 3],
  fn,
};
target.j.push(target.j);
target.i = target;
const myCopy = (target) => {};
const myDeepCopy = (target, map = new WeakMap()) => {
  const type = Object.prototype.toString.call(target).slice(8, -1);
  console.log({ type, target });
  if (type === "Object") {
    let ret = {};
    const has = map.has(target);
    if (has) {
      ret = map.get(target);
    } else {
      map.set(target, target);
      for (const key in target) {
        if (target.hasOwnProperty(prop)) {
          ret[key] = myDeepCopy(target[key], map);
        }
      }
    }
    return ret;
  } else if (type === "array") {
    let ret = [];
    const has = map.has(target);
    if (has) {
      ret = map.get(target);
    } else {
      map.set(target, target);
      for (const item of target) {
        ret.push(myDeepCopy(item, map));
      }
    }
    return ret;
  } else {
    return target;
  }
};
const normal = myCopy(target);
const deep = myDeepCopy(target);
target.fn = () => "222222222222";
console.log(target.fn());
console.log(deep.fn());
console.log({ target, normal, deep });
