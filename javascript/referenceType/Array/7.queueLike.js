/***
 *      shift()   unshift()
 * 
 *      shift():删除数组起始位置的第一个元素，并返回该元素
 *      unshift():往数组起始位置增加若干元素，并返回增加后的数组长度
 * 
 *      这两个方法都会【改变】原数组。
 *      
 */

let arr = ['name','is','jack'];
console.log(arr.unshift('hello!','my')); //5
console.log(arr); //[ 'hello!', 'my', 'name', 'is', 'jack' ]

console.log(arr.shift()); //hello!
console.log(arr); //[ 'my', 'name', 'is', 'jack' ]