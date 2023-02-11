const { reject } = require("async");

/***
 *    promise的状态：
 *      (1)pending 未决定的，待定
 *      (2)fulfilled/resolved 已解决的，兑现
 *      (3)rejected 被拒绝
 */
function fun(age) {
  return (promise = new Promise((resolve, reject) => {
    if (age > 18) {
      console.log("resolve：对象成年！");
      resolve(age);
    } else {
      console.log("reject：对象未成年！");
      reject(age);
    }
  }));
}

console.log(fun(4));
// reject：对象未成年！
// Promise { <rejected> 4 }

console.log(fun(14));
// reject：对象未成年！
// Promise { <rejected> 14 }

console.log(fun(24));
// resolve：对象成年！
// Promise { 24 }

console.log(fun(54));
// resolve：对象成年！
// Promise { 54 }

/*  输出还包含了一堆提示信息，
 *  大意为对于返回结果为“拒绝”的期约没有跟随一个.catch()来解决问题。
 *  （因为调用reject()会引起报错）
 */

let file1 = {
  exist:true,
  isReadable:true,
  isWritable:true,
  size:1024,
  content:'i\'m jack.'
}
let file2 = {
  exist:false,
  isReadable:false,
  isWritable:false,
  size:0,
  content:''
}
let str = 'helloWorld!';
async function addContent(filename,newContent) {
  return new Promise((resolve,reject)=>{
    if(filename.exist) {
      resolve();
    }else {
      reject('the file is not exits!');
    }
  }).then(()=>{
    if(filename.isReadable) {
      return Promise.resolve();
    }else {
      return Promise.reject('the file is not readable!');
    }
  }).then(()=>{
    if(filename.isWritable) {
      return Promise.resolve(newContent);
    }else {
      return Promise.reject('the file is not writable!');
    }
  }).then((content)=>{
      filename.content += content;
      return Promise.resolve('success！');
  })
}

addContent(file1,str);
setTimeout(()=>{console.log(file1.content)},0)

