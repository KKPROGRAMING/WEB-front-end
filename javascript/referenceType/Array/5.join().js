/**
 *      join()
 *          join()方法接收一个参数，即【字符串分隔符】，返回包含所有项的字符串。
 */

let colors = ["red", "green", "blue"];
console.log(colors.toString()); //red,green,blue
console.log(colors.join()); //red,green,blue
console.log(colors.join(",")); //red,green,blue
console.log(colors.join("||")); //red||green||blue

/**
 *      这里调用join()方法，得到了与调用toString()方法相同的结果。
 *      且，调用join()方法时，不传参数与传入参数','得到了同样的结果。
 *      当不给join()传入任何参数，或者传入undefined，则仍然使用逗号作为分隔符。
 */

//另外补充两个方法：
console.log(colors.valueOf()); //[ 'red', 'green', 'blue' ] 返回数组本身
console.log(colors.toLocaleString()); //red,green,blue

console.log({ a: "hello", b: "world", c: "age" }.valueOf());
//{ a: 'hello', b: 'world', c: 'age' }
console.log(
  {
    a: "hello",
    b: "world",
    c: "age",
    valueOf() {
      return "hello world!";
    },
  }.valueOf()
);
//hello world!

console.log({ a: "hello", b: "world", c: "age" }.toString());
//[object Object]
console.log(
  {
    a: "hello",
    b: "world",
    c: "age",
    toString() {
      return "hello world!";
    },
  }.toString()
);
//hello world!
