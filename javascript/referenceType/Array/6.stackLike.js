/**
 *      push()  pop()
 * 
 *      push():往数组末尾增加若干元素，返回增加元素后的数组长度
 *      pop():删除数组末尾的一个元素，并返回该元素
 * 
 *      这两个方法都会【改变】原数组。
 */

let arr = [];
console.log(arr.push('hello','world','!')); //3
console.log(arr); //[ 'hello', 'world', '!' ]

console.log(arr.pop()); //!
console.log(arr); //[ 'hello', 'world' ]