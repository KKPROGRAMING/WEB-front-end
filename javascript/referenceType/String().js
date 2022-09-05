/***
 * 1.JavaScript字符
 * 
 * （属性）.length 长度
 * （方法）charAt() 指定位置的字符
 * （方法）charCodeAt() 指定位置字符的编码
 * （方法）fromCharCode() 根据给定编码创建字符
 */
var str = "HelloWorld!";
console.log(str.length); //11
console.log(str.charAt(1)); //e
console.log(str.charCodeAt(1)); //101
console.log(String.fromCharCode(101)); //e
/***
 * （方法）codePointAt() 指定位置字符的码点
 * （方法）fromCodePoint() 根据给定码点创建字符
 * 
 * 码点是Unicode中一个字符的完整标识。
 * 为正确解析既包含单码元字符又包含代理对字符的字符串，
 * 可以使用codePointAt()来代替charCodeAt()。
 * 与charCodeAt()有对应的codePointAt()一样，
 * fromCharCode()也有一个对应的fromCodePoint()。
 */
var str = "12☺45";
console.log(str.charCodeAt(2)); //9786
console.log(String.fromCharCode(9786)); //☺
console.log(str.codePointAt(2)); //9786
console.log(String.fromCodePoint(9786)); //☺
/**
 * 可能这里的例子举的并不是很好，参照红宝书上的示例，"☺"字符
 * 是一个代理对字符，由32位码元构成；但是这里无论使用charCodeAt()/fromCharCode()，
 * 还是codePointAt()/fromCodePoint()，结果都是一样的，区别于原书示例。
 */


/***
 * 2.normalize()方法
 * 
 * 某些Unicode 字符可以有多种编码方式。比较操作符不在乎字符看起来是什么样的，
 * 有些外形相同但编码不同的字符在比较时得到的结果为"false"。
 * 为解决这个问题，Unicode 提供了4 种规范化形式，可以将类似上面的字符规范化为一致的格式。
 * 
 * 这4种规范化形式是：
 * NFD（Normalization Form D）、
 * NFC（Normalization Form C）、
 * NFKD（Normalization Form KD）、
 * NFKC（Normalization Form KC）。
 * 
 * 选择同一种规范化形式可以让比较操作符返回正确的结果。
 */
var a1 = String.fromCharCode(0x00C5),
    a2 = String.fromCharCode(0x212B),
    a3 = String.fromCharCode(0x0041, 0x030A);
console.log(a1, a2, a3); // Å, Å, Å

console.log(a1 === a2); // false
console.log(a1 === a3); // false
console.log(a2 === a3); // false

console.log(a1.normalize("NFD") === a2.normalize("NFD")); // true
console.log(a2.normalize("NFKC") === a3.normalize("NFKC")); // true
console.log(a1.normalize("NFC") === a3.normalize("NFC")); // true

/***
 * 3.字符串操作方法
 * 
 *  （1）concat()
 *      用于将一个或多个字符串拼接成一个新字符串。
 *      可以接收任意多个参数，因此可以一次性拼接多个字符串。
 *      虽然concat()方法可以拼接字符串，但更常用的方式是使用加号操作符（+）。
 *      而且多数情况下，对于拼接多个字符串来说，使用加号更方便。
 * 
 *  （2）提取子字符串
 *      slice() \ substr() \ substring()
 *      都接收一或两个参数。第一个参数表示子字符串开始的位置，
 *      第二个参数表示子字符串结束的位置。
 *      任何情况下，省略第二个参数都意味着提取到字符串末尾。
 *      I.slice()
 *          第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）。
 *          slice()方法将所有负值参数都当成字符串长度加上负参数值。
 *      II.substring()
 *          第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）。
 *          substring()方法会将所有负参数值都转换为0。
 *      III.substr():
 *          第二个参数表示返回的【子字符串长度】，或者字符的数量。
 *          substr()方法将第一个负参数值当成字符串长度加上该值，将第二个负参数值转换为0。
 * 
 *      注意：
 *          1）与concat()方法一样，slice()、substr()、substring()
 *              也不会修改调用它们的字符串，而只会返回提取到的原始新字符串值。
 *          2）substring两个参数前后调换得到结果相同，slice则不行。
 *              若slice第二个参数小于第一个参数，返回空字符串。
 *              这是因为substring会将较小的参数作为起点，将较大的参数作为终点。
 
 */

//concat()
var str1 = "Hello ";
var str2 = "World"
console.log(str1.concat(str2)); //Hello World
console.log(str1.concat(str2,"!")); //Hello World!
console.log(str1); //Hello 

//slice() / substr() / substring()
//positive value
var stringValue = "hello world";
console.log(stringValue.slice(3)); // "lo world"
console.log(stringValue.substring(3)); // "lo world"
console.log(stringValue.substr(3)); // "lo world"
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3,7)); // "lo w"
console.log(stringValue.substr(3, 7)); // "lo worl"
//negative value
var stringValue = "hello world";
console.log(stringValue.slice(-3)); // "rld"
console.log(stringValue.substring(-3)); // "hello world"
console.log(stringValue.substr(-3)); // "rld"
console.log(stringValue.slice(3, -4)); // "lo w" 
console.log(stringValue.substring(3, -4)); // "hel" 观察这里发现，substring两个参数前后调换是可以的，slice就不行
console.log(stringValue.substr(3, -4)); // "" (empty string)

/***
 * 4.字符串位置方法
 * 
 *     indexOf() / lastIndexOf()
 * 
 *     两者的区别在于：indexOf从字符串开头开始查找子字符串，lastIndexOf从字符串末尾开始查找字符串。
 *     这两个方法都可以接收可选的第二个参数，表示开始搜索的位置：
 *         1）indexOf()会从这个参数指定的位置开始向字符串【末尾】搜索，忽略该位置之前的字符；
 *         2）lastIndexOf()则会从这个参数指定的位置开始向字符串【开头】搜索，忽略该位置之后直到字符串末尾的字符。
 *
 *     tip：使用第二个参数并循环调用indexOf()或lastIndexOf()，就可以在字符串中找到所有的目标子字符串
 */
var stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7
console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4
//search for all targets
var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while(pos > -1) {
positions.push(pos);
pos = stringValue.indexOf("e", pos + 1);
}
console.log(positions); // [3,24,32,35,52]

/***
 * 5.字符串包含方法
 * 
 *      startsWith() / endsWith() / includes()
 *      
 *      方法作用见其名，返回值都是【布尔值】。
 * 
 *      第二个参数：
 *          I.startsWith()、includes()
 *              表示开始搜索的位置。
 *              如果传入第二个参数，则意味着这两个方法会从指定位置向字符串末尾搜索，
 *              忽略该位置之前的所有字符。
 *          II.endsWith()
 *              表示应该当作字符串末尾的位置。
 *              如果不提供这个参数，那么默认就是字符串长度；
 *              如果提供那个这个参数，那么就好像字符串只有那么多字符一样。

个参数，则意味着这两个方法会从指定位置向着字符串末尾搜索，忽略该位置之前的所有字符
 */
var message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false
console.log(message.endsWith("baz")); // true
console.log(message.endsWith("bar")); // false
console.log(message.includes("bar")); // true
console.log(message.includes("qux")); // false

console.log(message.startsWith("foo")); // true
console.log(message.startsWith("foo", 1)); // false
console.log(message.includes("bar")); // true
console.log(message.includes("bar", 4)); // false

console.log(message.endsWith("bar")); // false
console.log(message.endsWith("bar", 6)); // true

/***
 * 6.trim()方法
 * 
 *      trim() / trimLeft() / trimRight()
 * 
 *      这个方法会创建字符串的一个副本，删除前、后所有空格符，再返回结果。
 *      返回的结果是字符串的副本，因此原始字符串不受影响。
 *      trimLeft() / trimRight() 分别用于从字符串开始和末尾清理空格符。
 */
var str = "   hello   ";
//为了让结果明显，在字符串两侧添加了引号
console.log(str.trim()); //"hello"
console.log(str.trimLeft()); //"hello   "
console.log(str.trimRight()); //"   hello"
console.log(str); //"   hello   "


/***
 * 7.repeat()方法
 * 
 *      该方法接收一个【整数参数】，表示要将字符串复制多少次，然后返回拼接所有副本后的结果。
 */
var str = "na ";
console.log(str.repeat(16)+"batman");
//na na na na na na na na na na na na na na na na batman


/***
 * 8.padStart() / padEnd()
 * 
 *      这两种方法会复制字符串，如果小于指定长度，则在相应一边填充字符，
 *      直到满足长度条件。
 * 
 *      这两种方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格。
 * 
 *      注意：
 *          （1）可选的第二个参数并不限于一个字符。若提供多字符的字符串，
 *              则会拼接后截断以匹配指定长度。
 *          （2）如果长度小于或等于字符串长度，则会返回原始字符串。
 */
var str = "foo";

console.log(str.padStart(6)); //   "foo"
console.log(str.padStart(6,".")); //"...foo"
console.log(str.padEnd(6)); //"foo   "
console.log(str.padEnd(6,".")); //"foo..."

console.log(stringValue.padStart(8, "bar")); // "barbafoo"
console.log(stringValue.padStart(2)); // "foo"
console.log(stringValue.padEnd(8, "bar")); // "foobarba"
console.log(stringValue.padEnd(2)); // "foo"


/***
 * 9.字符串迭代与解构
 * 
 *      （1）手动使用迭代器
 *          xxx[Symbol.iterator]()
 *          注意：xxx是一个类型为string的原始值。
 *      （2）for-of
 *          在for-of循环中可以通过这个迭代器按序访问每个字符。
 *      （3）解构操作符
 *          [...xxx]
 *          注意：xxx是一个类型为string的原始值。
 */
var message = "abc";
var stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next()); // {value: "a", done: false}
console.log(stringIterator.next()); // {value: "b", done: false}
console.log(stringIterator.next()); // {value: "c", done: false}
console.log(stringIterator.next()); // {value: undefined, done: true}

 for (const c of "abcde") {
    console.log(c);
    }
    // a
    // b
    // c
    // d
    // e

var message = "helloworld!";
console.log([...message]);
// [
//     'h', 'e', 'l', 'l',
//     'o', 'w', 'o', 'r',
//     'l', 'd', '!'
// ]

/***
 * 10.字符串大小写转换
 * 
 *      toLowerCase() / toUpperCase()
 *      toLocaleLowerCse() / toLocaleUpperCase 
 *      下面这一组旨在基于特定地区实现。
 */
var str = "Hello World!";
console.log(str.toLowerCase()); //hello world!
console.log(str.toUpperCase()); //HELLO WORLD!

/***
 * 11.字符串模式匹配方法
 * 
 *      （1）查找模式：match() / search()
 *              都接收一个参数，可以是一个正则表达式，或一个RegExp对象。
 *              match()返回一个数组，
 *                  若指定是全局匹配，该数组返回满足匹配条件的所有子字符串。
 *                  若未指定全局匹配，数组第一个元素是与整个模式匹配的字符串，其余元素
 *              则是与表达式中的捕获组匹配的字符串（如果有的话）。
 *              search()返回模式【第一个】匹配的位置索引。
 *                  tip:和字符串的查找(indexOf)相比，正则查找在匹配的条件上更为灵活。可根据具体情况使用。
 *      （2）替换操作：replace()
 *              接收两个参数：
 *                  第一个参数可以是一个RegExp对象或一个字符串（这个字符串不会转化为正则表达式），
 *                  第二个参数可以是一个字符串或一个函数。
 * 
 *              注意：如果第一个参数是字符串，那么只会替换第一个子字符串。如果想要替换【所有】
 *                   子字符串，第一个参数必须为正则表达式并且带【全局标记】。
 *      （3）拆分操作：split()
 *          该方法会根据传入的分隔符将字符串拆分成数组。
 *              两个参数：
 *                  第一个参数作为分隔符，可以是字符串，也可以是RegExp对象。
 *                  第二个参数（可选）即数组大小，确保返回的数组不会超过指定大小。
 */
//match()
var text = "cat, bat, sat, fat";
var pattern1 = /.at/g;
var pattern2 = /.at/;
console.log(text.match(pattern1)); //[ 'cat', 'bat', 'sat', 'fat' ]
console.log(text.match(pattern2)); //[ 'cat', index: 0, input: 'cat, bat, sat, fat', groups: undefined ]
 
//search()
var pattern1 = /at/g;
var pattern2 = /at/;
console.log(text.search(pattern1)); //1
console.log(text.search(pattern2)); //1

//replace()
console.log(text.replace(pattern1,"ond")); //cond, bond, sond, fond
console.log(text.replace(pattern2,"ond")); //cond, bat, sat, fat

//split
var colorText = "red,blue,green,yellow";
console.log(colorText.split(",")); //[ 'red', 'blue', 'green', 'yellow' ]
console.log(colorText.split(",",2)); //[ 'red', 'blue' ]
console.log(colorText.split(/[^,]+/)); //[ '', ',', ',', ',', '' ]
//返回的数组前后包含两个空字符串。
//这是因为正则表达式指定的分隔符出现在了字符串开头（"red"）和末尾（"yellow"）。


/***
 * 12.localeCompare()方法
 * 
 *      该方法比较两个字符串，返回如下3个值中的一个：
 *          （1）如果按照字母表顺序，字符串应该排在字符串参数前头，则返回负值。
 *              通常是-1，具体还要看与实际值相关的实现。
 *          （2）如果字符串与字符串参数相等，则返回0。
 *          （3）如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值。
 *              如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值。
 */
var stringValue = "yellow";
console.log(stringValue.localeCompare("brick")); // 1
console.log(stringValue.localeCompare("yellow")); // 0
console.log(stringValue.localeCompare("zoo")); // -1

//因为返回的具体值可能因具体实现而异，所以最好像下面的示例中一样使用localeCompare()：
function determineOrder(value){
    let result = stringValue.localeCompare(value);
    if(result < 0){
        console.log(`The string 'yellow' comes before the string '${value}'`);
    }
    else if(result >0){
        console.log(`The string 'yellow' comes after the string '${value}'`);
    }
    else{
        console.log(`The string 'yellow' is equal to the string '${value}'`);
    }
}
determineOrder("brick"); //The string 'yellow' comes after the string 'brick'
determineOrder("yellow"); //The string 'yellow' is equal to the string 'yellow'
determineOrder("zoo"); //The string 'yellow' comes before the string 'zoo'