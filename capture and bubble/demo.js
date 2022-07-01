var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");

/**
 * [capture and bubble]
 * addEventListener(type,listener(),options)
 * the default value of parameter "option" is "false"
 * means the listener() will run when in bubble;
 * if set the "option" "true"
 * the listener  will run when in capture.
 * 
 * and other options....
 * such as {once:true}
 * means the listener will only run once
 */

a.addEventListener("click",function (){
    //a.textContent = "im a, i have been clicked."
    console.log("a:1");
},true);
//run this function when in capture

a.addEventListener("click",function (){
    //a.textContent = "im a, i have been clicked."
    console.log("a:2");
},{once:true,capture:true});

b.addEventListener("click",function (){
    //b.textContent = "im b, i have been clicked."
    console.log("b:2");
},true);

c.addEventListener("click",function (){
    //c.textContent = "im c, i have been clicked."
    console.log("c:3");
});

