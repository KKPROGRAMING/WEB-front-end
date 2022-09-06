/***
 *  eval()方法
 *      
 *      该方法就是一个完整的ECMAScript解释器，它接收一个参数，
 *      即一个要执行的ECMAScript（JavaScript）【字符串】。
 * 
 *      当解释器发现eval()调用时，会将参数解释为实际的ECMAScript语句，
 *      然后将其插入到该位置。
 * 
 *      通过eval()执行的代码属于该调用所在上下文，被执行的代码与该上下文
 *      拥有相同的作用域链。这意味着定义在包含上下文中的变量可以在eval()
 *      调用内部被引用。
 * 
 *      注意！！严格模式下，在eval()内部创建的变量和函数无法被外部访问。
 *      该方法慎用，可能会受到XSS攻击。
 */

let msg = "console.log('hello world!')";
eval(msg); //hello world!

let value = 10086;
eval("value+=4;console.log(`${value}`)"); //10090

eval("function sayHello(name){console.log(`Hello!My name is ${name}.`)}");
sayHello('jack');
//Hello!My name is jack.

eval("var tmp = `Linda`");
console.log(tmp);
//Linda
eval("let tmp = `Linda`");
console.log(tmp);
//ReferenceError: tmp is not defined
/***
 * 通过eval()定义的任何变量和函数都不会被提升，
 * 这是因为在解析代码的时候，它们是被包含在一个字符串中的。
 * 它们只是在eval()执行的时候才会被创建。
 */
