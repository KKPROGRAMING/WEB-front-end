const target = {
  name: "jack",
  age: 19,
};

const handler = {
  get(target, property, reciver) {
    //console.log(arguments);
    return target[property];
  },
};

// let proxy = new Proxy(target, handler);

// console.log(proxy);

// console.log(proxy.name);
// console.log(proxy.age);

//如果需要创建一个关系可撤销的代理
const { proxy, revoke } = Proxy.revocable(target, handler);
console.log(proxy);
/**
 * 注意！这里的代理名一定要叫'proxy'，其他如'proxy_n'或'prox'都只能得到undefined
 */
console.log(proxy.name);
console.log(proxy.age);
revoke();
console.log(proxy);

//多层代理构建拦截网
const passwd = {
  password: "123456",
};
const user = {
  name: "mike",
};

let firstProxy = new Proxy(passwd, {
  get() {
    console.log("first proxy");
    return Reflect.get(...arguments);
  },
});

let secondProxy = new Proxy(firstProxy, {
  get() {
    console.log("second proxy");
    return user.name === "jack" ? Reflect.get(...arguments) : undefined;
  },
});

console.log(secondProxy.password);

//一些代理捕获器
let obj = {
  name: "lily",
  age: 12,
};
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/**
 * { value: 'lily', writable: true, enumerable: true, configurable: true }
 */

let target = {
  name: "lily",
  age: 12,
};

let proxy = new Proxy(target, {
  getOwnPropertyDescriptor(target, property) {
    return Reflect.getOwnPropertyDescriptor(...arguments);
  },
});

console.log(Object.getOwnPropertyDescriptor(proxy, "age"));
console.log(Reflect.getOwnPropertyDescriptor(proxy, "age"));

let obj = {
  name: "lily",
  age: 12,
};
let map = new Map();
console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(map));
/**
 * [Object: null prototype] {}
 * Object [Map] {}
 */
