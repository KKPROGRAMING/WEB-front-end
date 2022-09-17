/***
 *      reverse()   sort()
 * 
 *      reverse():将数组元素反向排列。
 *      sort():可以接收一个【比较函数】，按照升序或降序排列数组。
 * 
 *      注意！！在不向sort()方法传入参数的情况下，默认按照升序排列。
 *      且，即使数组的元素都是数值，也会先把数组转换为字符串再比较、排序。
 * 
 *      这两个方法都会【改变】原数组。
 */

let arr = ["hello","!","my","name","is","jack"];
let num = [2,6,15,-7,32,1];
console.log(arr.reverse()); //[ 'jack', 'is', 'name', 'my', '!', 'hello' ]
console.log(num.reverse()); //[ 1, 32, -7, 15, 6, 2 ]

console.log(arr.sort()); //[ '!', 'hello', 'is', 'jack', 'my', 'name' ]
console.log(num.sort()); //[ -7, 1, 15, 2, 32, 6 ]

//传入比较函数，实现按照数值排序
function compare1(a,b){
    //升序排列，前一个元素小于后一个元素，返回-1；若前大于后，则返回1
    if(a<b){
        return -1;
    }
    else if(a==b){
        return 0 ;
    }
    else{
        return 1;
    }
}
console.log(num.sort(compare1)); //[ -7, 1, 2, 6, 15, 32 ]

function compare2(a,b){
    //降序排列，前一个元素小于后一个元素，返回1；若前大于后，则返回-1
    if(a<b){
        return 1;
    }
    else if(a==b){
        return 0 ;
    }
    else{
        return -1;
    }
}
console.log(num.sort(compare2)); //[ 32, 15, 6, 2, 1, -7 ]

//可简化为以下形式：
/*升序*/
console.log(num.sort((a,b)=>a-b)); //[ -7, 1, 2, 6, 15, 32 ]
/*降序*/
console.log(num.sort((a,b)=>b-a)); //[ 32, 15, 6, 2, 1, -7 ]