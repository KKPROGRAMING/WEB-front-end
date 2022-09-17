/***
 * 在ES6中，Array的原型上暴露了3个用于【检索数组内容】的方法：
 *      keys() / values() / entries()
 * 
 *      1.keys()
 *          返回数组【索引】的迭代器。
 *      2.values()
 *          返回数组【元素】的迭代器。
 *      3.entries()
 *          返回索引/值【对】的迭代器。
 * 
 *      由于这些方法返回的都是迭代器，
 *      所以可以将它们的内容通过Array.from()直接转换为数组实例。
 */

const arr = ["black","white","red","purple","blue","green"];

const arr_keys = arr.keys(); //Object [Array Iterator] {}
const arr_values = arr.values(); //Object [Array Iterator] {}
const arr_entries = arr.entries(); //Object [Array Iterator] {}

console.log(Array.from(arr_keys)); //[ 0, 1, 2, 3, 4, 5 ]
console.log(Array.from(arr_values)); //[ 'black', 'white', 'red', 'purple', 'blue', 'green' ]
console.log(Array.from(arr_entries));
// [
//     [ 0, 'black' ],
//     [ 1, 'white' ],
//     [ 2, 'red' ],
//     [ 3, 'purple' ],
//     [ 4, 'blue' ],
//     [ 5, 'green' ]
//   ]

//使用ES6的解构可以容易地在循环中拆分键值对
for (const [index,element] of arr.entries()) {
    console.log(index);
    console.log(element);
}
// 0
// black
// 1
// white
// 2
// red
// 3
// purple
// 4
// blue
// 5
// green