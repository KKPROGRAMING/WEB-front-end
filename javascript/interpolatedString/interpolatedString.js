let name = 'jack';
let age = 18;
let address = 'HDU';
let stringBar = `Hello ${name},your age is ${age}.The address is ${address}.`;

//this is a TAG function
function simpleTag(string,...expressions){
    console.log(string);
    for(const expression of expressions){
        console.log(expression);
    }
    return "over";
}

simpleTag(stringBar);
//Hello jack,your age is 18.The address is HDU.

simpleTag`Hello ${name},your age is ${age}.The address is ${address}.`
// [ 'Hello ', ',your age is ', '.The address is ', '.' ]
// jack
// 18
// HDU

/***
 * ATTENTION!!
 * if you use a variable to save the interpolated string,
 * the function 'simpleTag()' will NOT get the other parameters as 'expressions'.
 * that's because the type of this variable has been changed into 'string'.
 *   compare the results of following two ways:
 *      ---> simpleTag(stringBar);
 *      ---> simpleTag`Hello ${name},your age is ${age}.The address is ${address}.`
 */

____________________________________________________________________________

//use the tag function: String.raw
console.log(`\u00A9`); // ©
console.log(String.raw`\u00A9`);// \u00A9
// let tmpString = `\u00A9`;
// console.log(String.raw(tmpString)); //error:Cannot convert undefined or null to object

console.log(`first line\nsecond line`);
// first line
// second line
console.log(String.raw`first line\nsecond line`);
//first line\nsecond line

/***
 * pay attention to the type of parameters.
 * must input an interpolated string directly instead of saving it as a variable.
 */

____________________________________________________________________________

// '/raw' could also be as an attribute of STRING ARRAY:
function printRaw(strings){
    console.log(strings); //[ '©', '\n' ]
    console.log('Actual characters:');
    for(const string of strings) {
        console.log(string);
    }

    console.log('Escaped characters:');
    for(const rawString of strings.raw) {
        console.log(rawString);
    }

    console.log(Array.isArray(strings)); //true
}
printRaw`\u00A9${'and'}\n`;
//[ '©', '\n' ]
// Actual characters:
// ©
//(line break)
// Escaped characters:
// \u00A9
// \n
//true

/**
 * ATTENTION!！
 * the type of the first parameter of tag function is Array,
 * and this array saves a lot of string items belonged to the interpolated string.
 */

____________________________________________________________________________

console.log("\n".raw); //undefined

/*console.log("
".raw);*/ //error

console.log(`
`.raw); //undefined

let arr = ['©'];
console.log(arr.raw); //undefined

// for(const i of arr.raw){
//     console.log(i);
// } //error:arr.raw is not iterable

/**
 * the '.raw' is ONLY useful 
 * when being the attribute of the first parameter of TAG FUNCTION!
 */