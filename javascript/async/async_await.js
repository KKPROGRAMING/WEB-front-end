async function myFunc(name) {
  console.log(`my name is ${name}`);
}

async function myFunc2(name) {
  console.log(`my name is ${name}`);
  return name;
}

//console.log(myFunc('jack'));
//my name is jack
//Promise { undefined }

//console.log(myFunc2('jack'));
// my name is jack
// Promise { 'jack' }

//myFunc('amy').then(name=>console.log("bye "+name));//bye undefined
//myFunc2('linda').then(name=>console.log("bye "+name));//bye linda

async function doHomework(cost) {
  return new Promise((res, rej) => {
    console.log("doing homework...");
    setTimeout(() => {
      //console.log(`this:${this}`);

      if (cost <= 60) {
        console.log("finish homework!");
        res("finish");
      } else {
        console.log("too many homework!");
        rej("too many homework!");
      }
    }, cost);
  });
}

// doHomework(60).then((res)=>{
//     console.log(`res:${res}`);
// });
doHomework(70).catch((res) => {
  console.log(res + `doing another homework:`);
  doHomework(50).then((res) => {
    console.log(`res:${res}`);
  });
});

function boilWater() {
  return new Promise((res) => {
    console.log("开始烧水了...");
    setTimeout(res("水烧好了"), 2000);
  });
}

function cookNoodles(result) {
  console.log(result);
  return new Promise((res) => {
    console.log("现在加入面条...");
    setTimeout(res("面条煮熟了"), 5000);
  });
}

function eatNoodles(result) {
  console.log(result);
  return new Promise((res) => {
    console.log("开始吃面条...");
    setTimeout(res("面条吃完了"), 6000);
  });
}

function washBowl(result) {
  console.log(result);
  return new Promise((res) => {
    console.log("现在开始洗碗...");
    setTimeout(res("碗洗好了"), 3000);
  });
}

// boilWater()
//   .then(cookNoodles)
//   .then(eatNoodles)
//   .then(washBowl)
//   .then((result) => {
//     console.log(result);
//   }); //注意，then里面回调函数后面加上括号（）后执行的情况就不一样了

//await用法
async function myEatNoodles() {
  let boilWater_ = await boilWater();
  //console.log(typeof boilWater_); //string 因为通过res返回的就是一个字符串
  let cookNoodles_ = await cookNoodles(boilWater_);
  let eatNoodles_ = await eatNoodles(cookNoodles_);
  washBowl(eatNoodles_);
}

function myEatNoodles2() {
  //washBowl(eatNoodles(cookNoodles(boilWater())));
  let boilWater_ = boilWater();
  //console.log(typeof boilWater_); //string 因为通过res返回的就是一个字符串
  let cookNoodles_ = cookNoodles(boilWater_);
  let eatNoodles_ = eatNoodles(cookNoodles_);
  washBowl(eatNoodles_);
}

 myEatNoodles();
//myEatNoodles2();

let testFun = async () => {
  return await new Promise((res) => {
    console.log("this is a arrow function");
    res();
  });
};
testFun();
//不是不让在箭头函数里面用await，加上一个async关键字就可以了
