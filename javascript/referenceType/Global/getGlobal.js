/***
 * 调用一个简单返回this的函数是在任何执行上下文中获取Global对象的通用方式。
 * 
 * 另：虽然ECMA-262 没有规定直接访问Global 对象的方式，
 * 但【浏览器】将【window对象】实现为Global对象的代理。
 * 因此，所有全局作用域中声明的变量和函数都变成了window的属性。
 * 
 * 尝试打开浏览器控制台，观察并对比输出结果。
 */

let global = function(){
    return this;
}();
console.log(global); //打印结果见下

{/* <ref *1> Object [global] {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    performance: Performance {
      nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 43.19600009918213,
        nodeStart: 0.7724001407623291,
        v8Start: 2.544800043106079,
        bootstrapComplete: 32.321200132369995,
        environment: 15.621299982070923,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
      },
      timeOrigin: 1662443730108.426
    },
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    }
  } */}
  