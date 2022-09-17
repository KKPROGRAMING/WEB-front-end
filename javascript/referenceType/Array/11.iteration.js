/**
 *      every()  filter()  forEach()  map()  some()
 * 
 *      共同点：
 *          1.每个方法接收两个参数。
 *              （1）参数一，执行某些操作的函数。
 *                      该函数接收三个参数：数组元素（item）、元素索引（index）和数组本身（array）。
 *              （2）参数二，指向的this。
 *          2.都【不改变】原数组。
 * 
 *      every()：
 *          每项都返回true，总体才返回true。
 *      filter():
 *          该项为true，则将该项存进一个集合中；最终返回这个集合。
 *      forEach():
 *          每项都跑一下，无返回值。
 *      map():
 *          每项都跑一下，返回跑过之后的结果的集合。
 *      some():
 *          有一项为true，总体就返回true。
 */

/* 注意！箭头函数只有不加{}才可以不写return，不然一定要记得写return */

let arr = [3,5,4,6,75,12,-5,0,21,-4];

/* every() 和 some() */
console.log(arr.every((item,index,array)=>{
    return item<100;
})); //true
console.log(arr.every((item,index,array)=>{
    return item>0;
})); //false
console.log(arr.some((item,index,array)=>{
    return item>0;
})); //true

/* filter() */
console.log(arr.filter((item,index,array)=>{
    return item>0;
}));  //[ 3,  5,  4, 6, 75, 12, 21 ]
console.log(arr.filter((item,index,array)=>{
    return item<0;
}));  //[ -5, -4 ]

/* map() */
console.log(arr.map((item,index,array)=>{
    return item += 10;
})); //[ 13, 15, 14, 16, 85, 22,  5, 10, 31,  6 ]
console.log(arr.map((item,index,array)=>{
    return item -= 10;
})); //[ -7,  -5,  -6, -4,  65, 2, -15, -10, 11, -14 ]

/* forEach() */
console.log(arr.forEach((item,index,array)=>{
    return item += 10;
})); //undefined

arr.forEach((item,index,array)=>{
    item += 10;
    console.log(item);
});
// 13
// 15
// 14
// 16
// 85
// 22
// 5
// 10
// 31
// 6