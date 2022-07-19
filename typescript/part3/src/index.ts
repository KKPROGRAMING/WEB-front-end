// import {hey} from './hey';

function sum(a:number,b:number):number{
    return a+b;
}

const obj = {name:"jack",age: 18}; 
console.log(obj);


console.log(sum(123,456));
// console.log('hey!');
// console.log(hey);

//一定要有corejs，不然有了babel也处理不了
//corejs里有一个自己实现的promise 直接引进去
//编译后发现多了一堆代码，因为引入了corejs
console.log(Promise);

const fn7 = (a:number,b:number)=>{
    return a+b;
}
fn7(12,14);
//babel可以把箭头函数转换为低版本ES的模式
//但是bundle.js中最外面的箭头函数无法通过babel转变，这是因为这是webpack打包生成的，不经过babel
//此时需要进行其他的配置




