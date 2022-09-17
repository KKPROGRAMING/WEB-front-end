/**
 *      严格相等
 *      indexOf()  lastIndexOf()  includes()
 * 
 *      在比较第一个参数跟数组每一项时，会使用全等（===）比较，也就是说两项必须【严格相等】。
 * 
 *      indexOf()
 *          找到完全匹配的，返回第一项满足匹配开始处的索引值。从前往后搜索。
 *      lastIndexOf()
 *          作用同indexOf()，不过顺序是从后往前搜索。
 *      includes()
 *          如果搜索到了目标值，则返回true，否则返回false。
 */ 

 let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
 alert(numbers.indexOf(4)); // 3
 alert(numbers.lastIndexOf(4)); // 5
 alert(numbers.includes(4)); // true
 alert(numbers.indexOf(4, 4)); // 5
 alert(numbers.lastIndexOf(4, 4)); // 3
 alert(numbers.includes(4, 7)); // false

 /**下面这个例子体现了“严格相等”。因为引用类型在全等比较时，比较的其实是引用值。 */
 let person = { name: "Nicholas" };
 let people = [{ name: "Nicholas" }];
 let morePeople = [person];
 alert(people.indexOf(person)); // -1
 alert(morePeople.indexOf(person)); // 0
 alert(people.includes(person)); // false
 alert(morePeople.includes(person)); // true

 /**字符串也能使用这样的方法 */
let str = "helloworld!";
console.log(new Array("hello world")); //[ 'hello world' ]
console.log(new Array("hello world").indexOf("owo")); //-1
console.log(str.indexOf("owo")); //4
console.log(str.includes("lle")); //false


 /*      使用断言函数
 *      find()   findIndex()
 *      
 *      find()
 *          从最小索引开始寻找，返回第一个匹配的元素。
 *      findIndex()
 *          从最小索引开始寻找，返回第一个匹配的索引值。
 * 
 *      这两个方法都接收一个断言函数。
 *      找到第一个满足条件的元素即返回，不会再继续搜索。
 *      断言函数接收三个参数：元素（element）、索引（index）、数组本身（array）。
 *      
 */

 const people2 = [
    {
    name: "Matt",
    age: 27
    },
    {
    name: "Nicholas",
    age: 29
    },
    {
    name: "jack",
    age: 24
    }
    ];
    console.log(people2.find((element, index, array) => element.age < 28));
    // {name: "Matt", age: 27}
    console.log(people2.findIndex((element, index, array) => element.age < 28));
    // 0