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
  exist: true,
  isReadable: true,
  isWritable: true,
  size: 1024,
  content: "i'm jack.",
};
let file2 = {
  exist: false,
  isReadable: false,
  isWritable: false,
  size: 0,
  content: "",
};
let str = "helloWorld!";
async function addContent(filename, newContent) {
  return new Promise((resolve, reject) => {
    if (filename.exist) {
      resolve();
    } else {
      reject("the file is not exits!");
    }
  })
    .then(() => {
      if (filename.isReadable) {
        return Promise.resolve();
      } else {
        return Promise.reject("the file is not readable!");
      }
    })
    .then(() => {
      if (filename.isWritable) {
        return Promise.resolve(newContent);
      } else {
        return Promise.reject("the file is not writable!");
      }
    })
    .then((content) => {
      filename.content += content;
      return Promise.resolve("success！");
    });
}

addContent(file1, str);
setTimeout(() => {
  console.log(file1.content);
}, 0);

//___________________________________

//一个例子（无promise）
function fun() {
  console.log("1");
  setTimeout(console.log, 100, "2");
  console.log("3");
}
console.log("0");
fun();
setTimeout(console.log, 0, "4");
console.log("5");

//一个例子
new Promise((res, rej) => {
  console.log("1");
  res();
}).then(() => {
  console.log("2");
  setTimeout(() => {
    console.log("3");
  }, 0);
});
setTimeout(() => {
  console.log("4");
}, 0);
console.log("5");

//_______________________________________________

console.log(new Promise()); //error
console.log(new Promise(() => {})); //pending
console.log(
  new Promise((res, rej) => {
    res("res");
  })
); //fullfilled
console.log(
  new Promise((res, rej) => {
    rej("rej");
  })
); //rejected

console.log(Promise.resolve("res"));
console.log(Promise.reject("rej"));

//烧水 2000
//煮面条 5000
//吃面条 6000
//洗碗 3000

console.log("开始烧水了");
setTimeout(()=>{
  console.log("水烧好了，现在开始煮面条");
  setTimeout(()=>{
    console.log("面条煮好了,开始吃面条");
    setTimeout(()=>{
      console.log("面条吃完了，现在开始洗碗");
      setTimeout(()=>{
        console.log("碗洗好了");
      },3000)
    },6000)
  },5000)
},2000);

new Promise((res,rej)=>{
  console.log("开始烧水了");
  setTimeout(res(),2000);
}).then(()=>{
  return new Promise((res,rej)=>{
    console.log("水烧好了，现在开始煮面条");
    setTimeout(res(),5000);
  })
}).then(()=>);

//吃面条
setTimeout(() => {
  console.log("开始烧水了...");
  setTimeout(() => {
    console.log("水烧好了，现在加入面条...");
    setTimeout(() => {
      console.log("面条煮熟了，开始吃面条...");
      setTimeout(() => {
        console.log("面条吃完了，现在开始洗碗...");
        setTimeout(() => {
          console.log("碗洗好了。");
        }, 3000);
      }, 6000);
    }, 5000);
  }, 2000);
}, 0);

//promise吃面条
setTimeout(() => {
  new Promise((res) => {
    console.log("开始烧水了...");
    setTimeout(res, 2000);
  })
    .then(() => {
      console.log("水烧好了，现在加入面条...");
      return new Promise((res) => {
        setTimeout(res, 5000);
      });
    })
    .then(() => {
      console.log("面条煮熟了，开始吃面条...");
      return new Promise((res) => {
        setTimeout(res, 6000);
      });
    })
    .then(() => {
      console.log("面条吃完了，现在开始洗碗...");
      return new Promise((res) => {
        setTimeout(res, 3000);
      });
    })
    .then(() => {
      console.log("碗洗好了。");
    });
}, 0);

//打印试卷 1000
//写卷子 6000
//卷子批改 3000
//提交 500
//分别使用settimeout和promise实现一遍

//async/await小例子
async function foo() {
  console.log(2);
  console.log(await Promise.resolve(8));
  console.log(9);
}
async function bar() {
  console.log(4);
  console.log(await 6);
  console.log(7);
}
console.log(1);
foo();
console.log(3);
bar();
console.log(5);