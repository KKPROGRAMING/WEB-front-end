let obj = {
  a: 1,
  b: [1, 2, 3, 4],
  c: (a) => a + 2,
  d: false,
  e: {
    name: "jack",
    age: 12,
  },
};
obj.f = obj.b;
obj.g = obj;

console.log(obj);

function myClone(target) {
  let special = [];
  let targetChecked = [];
  let targetSelf = target;
  let res;

  function _clone(target, key) {
    if (typeof target === "null") {
      return null;
    } else if (typeof target === "function") {
      return new Function("return" + target.toString())();
    } else if (typeof target !== "object") {
      return target;
    }

    targetChecked.push(target);

    let index = targetChecked.indexOf(target);
    if (index !== -1) {
      special.push([key, target]);
      return targetChecked[index];
    }

    res = target instanceof Array ? [] : {};
    for (let key in target) {
      res[key] = _clone(target[key], key);
    }

    special.forEach((item) => {
      if (item[1] === targetSelf) {
        res[item[0]] = res;
      } else {
        res[item[0]] = item[1];
      }
    });

    return res;
  }

  return _clone(target, "");
}

let test = myClone(obj);
console.log(test);
console.log(obj.f === obj.b);
console.log(test.f === test.b);
console.log(obj.g === obj);
console.log(test.g === test);