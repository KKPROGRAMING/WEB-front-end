/***
 *  copyWithin()会按照指定范围【浅复制】数组中的部分内容，
 *  然后将它们插入到指定索引开始的位置。
 *  
 *  开始索引和结束索引与fill()使用同样的计算方法。
 *  
 *      参数：
 *        （1）第一个参数永远是【要插入位置的起始索引值】。
 *            注意不要和复制位置的索引混淆。
 *        （2）第二个参数可选，表示复制处的开始索引。
 *            如果不提供开始索引，默认从索引为0处开始赋值。
 *        （3）第三个参数可选，表示复制处的结束索引。
 *            如果不提供结束索引，则一直复制到数组末尾。
 * 
 *      另，负值索引从数组末尾开始计算。
 *      也可以将负索引想象成数组长度加上它得到的一个正索引。
 */

let ints;
let reset = ()=>{
    ints = [0,1,2,3,4,5,6,7,8,9];
};
reset();

//从索引5开始插入
ints.copyWithin(5);
console.log(ints);
reset();
// [
//     0, 1, 2, 3, 4,
//     0, 1, 2, 3, 4
//   ]

//从ints中复制索引0开始到索引3结束的内容
//插入到索引4开始的位置
ints.copyWithin(4,0,3);
console.log(ints);
reset();
// [
//     0, 1, 2, 3, 0,
//     1, 2, 7, 8, 9
//   ]

//负值索引
ints.copyWithin(-4,-7,-3);
console.log(ints);
reset();
// [
//     0, 1, 2, 3, 4,
//     5, 3, 4, 5, 6
//   ]

//索引过低，忽略
ints.copyWithin(1,-15,-13);
console.log(ints);
reset();
// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8, 9
//   ]

//索引过高，忽略
ints.copyWithin(1,14,15);
console.log(ints);
reset();
// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8, 9
//   ]

//索引反向，忽略
ints.copyWithin(2,4,2);
console.log(ints);
reset();
// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8, 9
//   ]

//索引部分可用，复制、填充可用部分
ints.copyWithin(4,7,15);
console.log(ints);
reset();
// [
//     0, 1, 2, 3, 7,
//     8, 9, 7, 8, 9
//   ]