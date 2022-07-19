//import {hi} from "app.js"
//console.log(hi);

let hello:string = "hey"

function fun5(a,b){
    //参数类型是隐式的any
    return a+b;
}

// function fn6(){
//     //调用方式不明确，因为不知道是否是严格模式、或者以什么方式调用
//     //有调用的风险，this是不明确的
//     //'this' implicitly has type 'any' because it does not have a type annotation.
//     alert(this);
// }

function fn6(this:Window){
    //把this的类型指定好
    alert(this);
}

// let box1 = document.getElementById('box1');
// box1.addEventListener('click',()=>{
//     alert('hello');
// })
//这里的box1可能为null，设置strictNullChecks为true进行检查，为空报错

// let box2 = document.getElementById('box1');
// box2?.addEventListener('click',()=>{
//     alert('hello');
// })
//加上"?"表示为空则不执行
//等于 if(box2===nulll){}else{}