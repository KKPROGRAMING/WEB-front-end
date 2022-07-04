var num = 2;
function fun1(){
    console.log(num);//undefined
    var num = 7 ;
    console.log(num);//7
}
fun1();
 /**
     * why the first output is 'undefined' ?
     * because the variable 'num' is hoisted up to the top of the function
     * and the first 'num' outside the scope is no use.
     * 
     * "console.log(num);
     * var num = 7;""
     * 
     * is equal to =>
     * 
     * "var num;
     * console.log(num);
     * num = 7;"
     */

let age = 17;
function fun2(){
    console.log(age);//error, without initialization
    let age = 18;
}
fun2();
/**
 * thats because "let" will not hoist the variable inside the scope!
 */

function fun(){
    if(true){
        var age = 17;
        console.log(age);//17
    }
    console.log(age);//17

    if(true){
        let school = "HDU";
        console.log(school);//"HDU"
    }
    console.log(school);//error, not defined
}
fun();
/**
 * the scope of "var" is FUNCTION
 * while the scope of "let" is BLOCK
 * the sentence "if(){}" is a block, etc. 
 */

 var name;
 var name;
 let old;
 let old; // SyntaxError, "old" has been annouced

//when the running environment is a browser:
 var name = 'Matt';
 console.log(window.name); // 'Matt'
 let year = 26;
 console.log(window.year); // undefined
 /**
  * the variable announced with "var" will be a new attribute of the "window" object,
  * but the one with "let" will not.
  */

 _______________________________________________________________________

//if you dont know the variable "weight" have been announced or not
//and lets suppose it havnt

//when announce with "var", announcing again is allowed.(hoist)
{/* <script> */}
    var weight;
{/*</script> */}

{/* <script> */}
    var weight;
    weight = 52;
{/*</script> */}

//when announce with "let", 
//sentence "if()" and "try/catch" are both no use.(not hoist)
{/* <script> */}
    let weight;
{/*</script> */}

/* if */
{/* <script> */}
if (typeof weight === 'undefined') {
    let weight;
    }
weight = 52;//equal to global assignment
{/*</script> */}

/* try/catch */
{/* <script> */}
try {
    console.log(weight); // if havnt announced, error
    }
catch(error) {
    let weight;
}
weight = 52;//equal to global assignment
{/*</script> */}

________________________________________________________________________

"use strict"
wow = 12;
console.log(wow);//wow is not defined.(strict mode)

________________________________________________________________________

for (var i = 0; i < 5; ++i) {
    setTimeout(() => console.log(i), 0)
    }
// 5,5,5,5,5
// print the same variable, the same value

for (let i = 0; i < 5; ++i) {
    setTimeout(() => console.log(i), 0)
    }
// 0,1,2,3,4
// print different values, different instances of variable "i"
