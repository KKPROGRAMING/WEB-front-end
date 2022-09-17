/***
 *      填充数组方法：fill()
 *      使用fill()方法可以向一个已有的数组中插入全部或部分相同的值。
 * 
 *      参数：
 *          （1）第一个参数永远是【要填充进去的值】。
 *              注意不要和表示位置的索引混淆。
 *          （2）第二个参数可选，表示填充处的开始索引。
 *              如果不提供开始索引，默认从索引为0处开始填充。
 *          （3）第三个参数可选，表示填充处的结束索引。
 *              如果不提供结束索引，则一直填充到数组末尾。
 * 
 *      另，负值索引从数组末尾开始计算。
 *      也可以将负索引想象成数组长度加上它得到的一个正索引。
 */

const zeros = [0,0,0,0,0,0];

//整个填充
zeros.fill(7);
console.log(zeros); //[ 7, 7, 7, 7, 7, 7 ]
zeros.fill(0); 

//索引大于等于3
zeros.fill(7,3);
console.log(zeros); //[ 0, 0, 0, 7, 7, 7 ]
zeros.fill(0); 

//索引大于等于1,小于4
zeros.fill(7,1,4);
console.log(zeros); //[ 0, 7, 7, 7, 0, 0 ]
zeros.fill(0); 

//负值索引
// (-6 + zeros.length = 0)
// (-3 + zeros.length = 3)
zeros.fill(7,-6,-3);
console.log(zeros); //[ 7, 7, 7, 0, 0, 0 ]
zeros.fill(0); 

//索引过低，忽略
zeros.fill(7,-9,-7);
console.log(zeros); //[ 0, 0, 0, 0, 0, 0 ]
zeros.fill(0); 

//索引过高，忽略
zeros.fill(7,9,12);
console.log(zeros); //[ 0, 0, 0, 0, 0, 0 ]
zeros.fill(0); 

//索引反向，忽略
zeros.fill(7,4,2);
console.log(zeros); //[ 0, 0, 0, 0, 0, 0 ]
zeros.fill(0); 

//索引部分可用，填充可用部分
zeros.fill(7,3,10);
console.log(zeros); //[ 0, 0, 0, 7, 7, 7 ]
zeros.fill(0); 