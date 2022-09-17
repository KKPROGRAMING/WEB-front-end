/***
 * Array构造函数还有两个ES6新增的用于创建数组的静态方法：from() 和 of()。
 * 
 *      1.from()
 *          用于将类数组结构转换为数组实例。
 *      参数：
 *          （1）第一个参数是一个类数组对象，即任何【可迭代】的结构，
 *              或者有一个length属性和可索引元素的结构。
 *          （2）接受第二个可选的映射函数参数。该函数可以直接增强新数组的值，
 *              无须像调用Array.from.map()那样先创建一个中间数组。
 *          （3）接收第三个可选参数，用于指定映射函数中this的值。但该this在箭头函数不适用！
 * 
 * 
 *      2.of()
 *          用于将一组参数转换为数组实例。
 */

//字符串
console.log(Array.from("Hello World!"));
// [
//     'H', 'e', 'l', 'l',
//     'o', ' ', 'W', 'o',
//     'r', 'l', 'd', '!'
//   ]

//将映射转换为一个新数组
let map = new Map().set(1,2).set(3,4);
console.log(Array.from(map));
//[ [ 1, 2 ], [ 3, 4 ] ]

//将集合转换为一个数组
let set = new Set().add(1).add(2).add(3).add(4);
console.log(Array.from(set));
//[ 1, 2, 3, 4 ]

//对现有数组进行浅复制
let crtArr = [5,6,7,8];
let newArr = Array.from(crtArr); //[ 5, 6, 7,8 ]
console.log(crtArr === newArr); //false

//任何可迭代对象
const iter = {
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};
console.log(Array.from(iter)); //[ 1, 2, 3, 4 ]

//将arguments对象转换为数组
function getArray(){
    return Array.from(arguments);
}
console.log(getArray('h','e','l','l','0')); //[ 'h', 'e', 'l', 'l', '0' ]

//带有.length属性，且具备可索引元素的结构
const arrayLikeObject = {
    0:1,
    1:2,
    2:3,
    3:4,
    length:4
}
console.log(Array.from(arrayLikeObject)); //[ 1, 2, 3, 4 ]

//通过第二个参数增强数组
let tmpArr = [1,2,3,4];
console.log(Array.from(tmpArr,x=>x**3)); //[ 1, 8, 27, 64 ]

let tmpArr2 = "hello world!";
console.log(Array.from(tmpArr2,x=>x.toUpperCase()));
// [
//     'H', 'E', 'L', 'L',
//     'O', ' ', 'W', 'O',
//     'R', 'L', 'D', '!'
//   ]

//通过第三个参数指定this
let tmpArr3 = [2022,2021,2020,2019];
let tmpObject = {
    name:"jack",
    age:18
};
console.log(Array.from(tmpArr3,function(x){
    return x-this.age;
},tmpObject));
//[ 2004, 2003, 2002, 2001 ]