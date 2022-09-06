/***
 *  在单例内置对象Math中，提供一个方法random()来获取随机数。
 *  Math.random()方法返回一个0~1范围内的随机数，其中包含0但不包含1。
 */

//打印一个0~1随机数（不包含1）
console.log(Math.random());

//打印一个2~10随机数（包含10）
console.log(Math.floor(Math.random()*9+2));

/***
 *  很多时候，通过函数来算出可选总数和最小可能的值可能更方便。
 */
function selectFrom(lowerValue,upperValue){
    let choice = upperValue - lowerValue + 1;
    return Math.floor(Math.random()*choice + lowerValue);
}
let num = selectFrom(2,10);
console.log(num); //2~10范围的值，其中包含2和10

/***
 *  使用这个函数，从一个数组中随机选择一个元素就很容易。
 */
 let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
 let color = colors[selectFrom(0, colors.length-1)];
 console.log(color);