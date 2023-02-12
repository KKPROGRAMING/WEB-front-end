let obj = {
  a: 1,
  b: [1, 2, 3, 4],
  c: (a) => a + 2,
  d: false,
  e: {
    name: "jack",
    age: 12,
    school:{
      schoolName:'HDU',
      address:'xiasha'
    }
  },
};
obj.f = obj.b;
obj.g = obj;

console.log(obj);

function myClone(target) {
  let targetStore = []; //已经被复制过的部分
  let cloneStore = []; //已经复制过的部分
  let circleSelf = []; //循环引用，且引用的是复制对象自身
  let ifRootTarget = true;

  function _clone(_target, key) {
    if (typeof _target === "null") {
      return null;
    } else if (typeof _target === "function") {
      return new Function("return" + _target.toString())();
    } else if (typeof _target !== "object") {
      return _target;
    }

    let res = _target instanceof Array ? [] : {};
    let index = targetStore.indexOf(_target);

    //不会把最根本的target放进targetStore数组中
    if (index !== -1) {
      return cloneStore[index];
    }

    if (_target === target) {
      if (ifRootTarget) {
        ifRootTarget = false;
      } else {
        //记录下引用复制对象自身的循环引用
        circleSelf.push(key);
        return null; //先暂时用null保存
      }
    }

    for (let key in _target) {
      res[key] = _clone(_target[key],key);
    }

    targetStore.push(_target);
    cloneStore.push(res);
    return res;
  }

  let r = _clone(target, "");
  if (circleSelf.length !== 0) {
    circleSelf.forEach((item) => {
      r[item] = r;
    });
  }

  return r;
}

let test = myClone(obj);
console.log(test);
console.log(obj.f === obj.b);
console.log(test.f === test.b);
console.log(obj.g === obj);
console.log(test.g === test);
console.log(`obj.c = ${obj.c}`);
console.log(`test.c = ${test.c}`);
console.log(test === obj);
