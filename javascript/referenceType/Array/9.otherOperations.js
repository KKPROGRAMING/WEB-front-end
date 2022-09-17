/**
 *      concat()  slice()  splice()
 */

 /*      concat():实现数组的拼接。
 *              有两种拼接的方式：（1）打平拼接 [Symbol.isConcatSpreadable] = true
 *                              （2）阻止打平 [Symbol.isConcatSpreadable] = false
 *              返回拼接后的新数组。
 *              该方法【不改变】原数组。
 */ 
let arr = ['hello'];
console.log(arr.concat('world','!')); //[ 'hello', 'world', '!' ]
console.log(arr); //[ 'hello' ]


 /*      slice()：从给定数组上“切下”一小片。
 *                  第一个参数，从哪里开始切。
 *                  第二个参数（可选），切到哪里。缺省情况下默认一直到数组末尾。
 *              返回的是被切下来的小片。
 *              该方法【不改变】原数组。
 */
let arr2 = ['i','l','i','k','e','j','s'];
console.log(arr2.slice(2)); //[ 'i', 'k', 'e', 'j', 's' ]
console.log(arr2.slice(2,4)); //[ 'i', 'k' ]
console.log(arr2); //['i', 'l', 'i',' k', 'e', 'j', 's']

 
 /*      splice():该方法可以实现下列多种操作：
 *                  （1）删除
 *                      传两个参数。参数一，从哪里开始删；参数二，删几个。
 *                  （2）插入
 *                      传三个参数。参数一，从哪里开始插入；参数二，0；参数三，要插入的元素。
 *                  （3）替换
 *                      传三个参数。参数一，从哪里开始替换；参数二，替换几个；参数三，要替换进去的元素。
 *              返回被移除的小片。如果是插入操作，则返回的是空数组。
 *              该方法【改变】原数组！
 */
let arr3 ;
let reset = ()=> arr3 = ['i','l','i','k','e','j','s'];
reset();

console.log(arr3.splice(1)); //[ 'l', 'i', 'k', 'e', 'j', 's' ]
console.log(arr3); //[ 'i' ]
reset();

//删除
console.log(arr3.splice(1,4)); //[ 'l', 'i', 'k', 'e' ]
console.log(arr3); //[ 'i', 'j', 's' ]
reset();

//插入
console.log(arr3.splice(5,0,'learning')); //[]
console.log(arr3); //[ 'i', 'l', 'i', 'k', 'e', 'learning', 'j', 's' ]
reset();

//替换
console.log(arr3.splice(5,2,'JavaScript')); 
console.log(arr3); //[ 'j', 's' ]
reset(); //[ 'i', 'l', 'i', 'k', 'e', 'JavaScript' ]
