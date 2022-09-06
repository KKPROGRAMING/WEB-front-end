/***
 * 几种数值格式化的方法：
 *      1.toFixed() 保留小数
 *      2.toExponential() 科学计数法
 *      3.toPrecision() 传参（整数）：根据位数选择合适的格式化方法；不传参返回原数值
 */

var num = 10.005;
console.log(num.toFixed()); //10
console.log(num.toExponential()); //1.0005e+1
console.log(num.toPrecision(1)); //1e+1
console.log(num.toPrecision(2)); //10
console.log(num.toPrecision(3)); //10.0
console.log(num.toPrecision(4)); //10.01 四舍五入
console.log(num.toPrecision()); //10.005

var num = 99;
console.log(num.toPrecision(1)); //1e+2
console.log(num.toPrecision(2)); //99
console.log(num.toPrecision(3)); //99.0
console.log(num.toPrecision()); //99

/***
 *  isInteger() ：用于辨别一个数值是否保存为整数
 */
console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(1.00)); //true
console.log(Number.isInteger(1.01)); //false


let arr = ["h","e","l","l"];
for(const [a,b] of arr){
    console.log(`${a},${b}`);
}