//变量类型声明
// let str:string = 'hello';

//函数返回值类型指定
function fun9(a:number,b:number):string{
    console.log(a+b+'');
    return a+b+'';
}

fun9(3,2)

// let a:number;
// let b:string;

//也可以直接使用字面量进行类型声明
let num1:10;
// num1 = 11;//无法再更改，一般不使用

//其他用法
let sexual:'male' | 'female';
sexual = 'male';
sexual = 'female';

let st:boolean | string;
//（联合类型）可以将类型或值限制在某几种之间

//any类型可以任意赋值，相当于关闭了ts的类型检测
//使用ts时不建议使用any
//声明变量如果不指定类型，ts解释器自动判断为any
//尽量别用
let d:any;
d = 10;
d = 'hello';
d = false;

//声明变量不知道类型
//unknown实际是类型安全的any
//该类型的变量不能直接赋值给其他变量
let e:unknown;
e = 10;
e = 'hello';
e = true;

let s:string;
//定义的类型为any，可以复制给其他变量
s = d;
//但是不能将unknown类型的变量赋值给其他变量
// s = e;

if(typeof e === 'string'){
    s = e;
}

//类型断言.用于告诉解析器变量的实际类型
s = e as string;
//或
s = <string>e

//void，无返回值，有返回值就报错
// function fn(a:number,b:number):void{
//     if(a>b){
//         return a+b;//error
//     }
//     else if(a<b){
//         return false;//error
//     }
//     else{
//         console.log(a+b);
//         return;
//     }
// }

//never表示永远不会返回值,undefine也不返回
//用于报错
function fn2():never{
    if(false){
        //return;//error
    }
    else{
        throw new Error('发生错误！');
    }
}
// fn2()


//一般不使用，因为几乎所有皆对象，限制了类型几乎没用
let obj1:object;
obj1 = {};
obj1 = function(){};

//用下面这种
//{}用来指定对象中可以包含哪些属性
//语法：{属性名1：属性值，属性名2：属性值}
//属性名后加'?'表示是可选属性
let obj2:{name:string,age?:number};
obj2 = {name:'jake'};
obj2 = {name:'jake',age:18};

//[age:string]:any 表示任意类型的属性，但属性名必须是字符串
let obj3:{name:string,[age:string]:any};
obj3 = {name:'jake'};
obj3 = {name:'jake',age:18,address:'HDU'};


//函数 function
//设置函数结构的类型声明，语法：
//（形参：类型，形参：类型，...）=>返回值类型
let func:(a:number,b:number)=>number;
func = function(n1,n2){
    return n1+n2;
}


//数组 array
let arr:string[];//字符串数组
arr = ['h','e','l','l','0'];
//或另外一种写法：
let arr2:Array<number>;//数字数组
arr2 = [1,2,3,4,5];


//元组（固定长度的数组） tuple
//定义一个元组，只有两个值
let tuple:[string,string];
tuple = ['hey','hello'];


//枚举 enum
//在多个值之间进行选择
enum Gender{//枚举类
    male = 0,
    female = 1
};

let item:{name:string,gender:Gender};
item = {name:'jack',gender:Gender.male};

// let j:string|number;
//'|'表示或，'&'表示与
// let j:string&number;//无意义
let j:{name:string}&{age:number};//用于连接两种结构对象
j = {name:'earth',age:10086};


//类型的别名
type myType = string;//给类型起别名
// let k:1|2|3|4|5;
// let l:1|2|3|4|5|6;
type newType = 1|2|3|4|5;
let k:newType;
let l:newType | 6;
