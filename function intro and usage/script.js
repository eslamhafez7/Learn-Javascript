// function intro and basic usage L57
// DRY = Don't Repeat Yourself
/* 
    - What's Function
    - User Defined , Built in
    - Syntax - Basic Usage
    - Example From Real Life
    - Parameter - Argument
    - Practical Example
*/

// function sayHello(userName) {
//     console.log(`Hi ${userName}`);
// }
// sayHello("Eslam");
// sayHello("Sara");
// sayHello("Aymen");
// sayHello("Ahmed");
// sayHello("Mai");




///////////////////////////////////////////////////////////////////////////////////*/

// Function Advanced Example L58
// function sayHello(userName, age) {
//     if (age < 20) {
//         console.log ("The app unusful for you")
//     }else {
//     console.log(`Hi ${userName} your age is ${age} years old`);
//     }
// }
//     sayHello("Eslam", 17);
//     sayHello("Sara", 40);
//     sayHello("Sayed", 18);




// function generateYears(start , end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if (i === exclude) {
//             continue;
//         }
//         console.log(i);
//     }
// }
// generateYears(1920, 2023, 2022)




///////////////////////////////////////////////////////////////////////////////////*/

// function return and use cases L59
// Note : Return stopping the execution for the following ConvolverNode
// بتوقف تنفيذ الكود الي بعدها
    // - return
    // - ASI - Automatic Semicolon Inseration [No Line Terminator Allowed]
    // - Interrupting - المقاطعه


// function calc(num1, num2) {
//     return num1 + num2;
// }
// let result = calc(20, 30);
// console.log(result + 200);

// function generate(start, end) {
//     for(i = start; i <= end; i++) {
//         if (i === 25) {
//             return `Interrupting`;
//         }
//         console.log(i)
//     }
// }
// generate(20, 45);



///////////////////////////////////////////////////////////////////////////////////*/



// Function Default Parameters L60

    // - Defult function parameter 
    // - Function defult parameter is [undefined]
    // - Old stratiges [[condition - logical or ||]]
    // - ES6 Method [put parameter in the function? function (username = "Osama", age = "30")]

// function hey(userName, age = "Unknown") {
//     // if (age === undefined) { // str 1
//     //     age = "Unknown"; es6 str
//     // }
//     // age = age || "Unknown"; // Truthy , Falsy Pattern // old str
//     return `Your name is${userName} ur age is ${age} `;
// }
// console.log(hey( "Osama"));
// console.log(hey( "Osama", 30));
// hey("Sami");
// hey("Sami", 30);
// hey("Sami");

///////////////////////////////////////////////////////////////////////////////////*/


// function reset parameter L61
    /*
    - Rest parameter // Receive unspecified number from the argument
    - Only one allowed
    - Must be last element
    */

// function calc(...numbers) {
//     // console.log(Array.isArray(numbers));
//     let result = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         result += numbers[i];  // result = result + numbers[i]
//     }
//     return `Final result is ${result}`;
// }
// console.log(calc(10, 20, 30, 40, 50, 900));


///////////////////////////////////////////////////////////////////////////////////*/

// Function Ultimate Practice L62
    /*
    - function advanced practice
    - Parameters
    - Default
    - Rest
    - Loop
    - Condition
    */

// function showInfo (us = "un", ag = "un", rt = "0", show = "Yes", ...sk) {
//     document.write(`<div>`);
//     document.write(`<h2> Welcome: ${us}`);
//     document.write(`<h2> Age Is: ${ag}`);
//     document.write(`<h2> Hour Rate: $${rt}`);
//     if (show === "Yes") {
//         if(sk.length > 0) {
//             document.write(`<p>Skills : ${sk. join(" | ")}</p>`);
//         }else {
//             document.write("<p>Skills Is Hidden</p>")
//         }
//     }else {
//         document.write(`<p>Skills Is Hidden</p>`)
//     }
//     document.write(`</div>`);
// }
// showInfo("Islam", 21, 20, "Yes", "Html", "Css", "Javascript");

///////////////////////////////////////////////////////////////////////////////////*/

// Random Arguments Function Challenge L63
    /*  
    - Create Function showDetails
    - Function Accept Three parameters [a, b, c]
    - Data Types for info is [String => Name], [Number => Age], [Boolean => Status]
    - Argument is Random
    - Data is not sorted output depends on data types 
    - use ternary conditional operator
    */
    // Following 
    /*
    function showDetails(a, b, c) {
        let name = typeof a === "string" ? a : typeof b === "string" ? b : c; 
        let age = typeof a === "number" ? a : typeof b === "number" ? b : c; 
        let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c; 
        let hireStatus = status ? "Your available to hire" : "You are not available to hire";
        document.write(`<br>Hello ${name} Your age is ${age} ${hireStatus}`); 
    }
    (showDetails("Osama", 38, true)); // Hello osama , Your age is 38, You are available for hire
    (showDetails(true, "Osama", 38)); // Hello osama , Yoour age is 38, You are available for hire
    (showDetails(38, true, "Osama")); // Hello osama , Yoour age is 38, You are available for hire
    (showDetails("Osama", 38, false)); // Hello osama , Yoour age is 38, You are not available for hire
    */



    ///////////////////////////////////////////////////////////////////////////////////*/
    // Anonymous Function And Practice L64  

    // let calculator = function(num1, num2) {
    //     return num1 + num2;
    // }
    // console.log(calculator(10, 20));
    // function sayHello() {
    //     console.log("Hello Osama");
    // }
    // // document.getElementById("show").onclick = sayHello;
    // document.getElementById("show").onclick = function() {
    //     console.log("Show");
    // }

    // setTimeout(function() {
    //     console.log("Good")
    // },1000)


    ///////////////////////////////////////////////////////////////////////////////////*/
    // Return Nested Function L65

    // Example 1

    // function sayMessage(fName, lName) {
    //     let Message = `Hello`;
    //     // Nestead Function 
    //     function concatMsg() {
    //         Message = `${Message} ${fName} ${lName}`;
    //     }
    //     concatMsg();
    //     return Message;
    // }
    // console.log(sayMessage("Osama", "Mohmed"))

    ///////////////////////////////////////////////////////////////////////////////////*/
    
    // Arrow Function Syntax L66 

    /* 
    - Regular Vs arrow function
    - Multiple lines
    const sayGoodbye= (name) => {
        console.log(`Goodbye, ${name}`);
    }
    */

    // function print (num) {
    //     return num;
    // }
    // console.log(print(100));
    // Arrow
    // let print = num => num;
    // console.log(print(30));
    // let print = (num1, num2) => num1 + num2;
    // console.log(print(100, 200));



    ///////////////////////////////////////////////////////////////////////////////////*/


    // Scope - Global and Local L67



    /*
    Global scope refers to variables or functions that are declared outside of any
    function or block.
    They can be accessed from anywhere within the code,
    including inside functions and other blocks.
      */
    // let globalVar = ("Hello, World");

    // function greet () {
    //     console.log(globalVar);
    // }
    // greet()
    /*
    Local scope, on the other hand, refers to variables or 
    functions that are declared inside a function or block.
    They can only be accessed within that function or block.
    */
    // function calcSum(a, b) {
    //     let sum = a + b;
    //     return sum;
    // }
    // console.log(calcSum(20, 30));
    /*
    It's important to note that variables with the same name can exist
    in different scopes without interfering with each other.
     */

    // let a = 1;
    // var b = 2;

    // function hey() {
    //     let a = 10;
    //     var b = 20;
    //     console.log(`Hey from Local - ${a}`);
    //     console.log(`Hey from Local - ${b}`);
    // }
    // hey()
    // console.log(`Hello Form Global - ${a}`);
    // console.log(`Hello Form Global - ${b}`);


    /*
    Note: 
    - the [var] declaration is not have a block scope but instead have function scope
    - let and const declarations have block scope and are only accessible within 
        the block in which they are declared.
    - global accessible from every where.
    */


    ///////////////////////////////////////////////////////////////////////////////////




    // Scope - Block L 68
    // scope relate to the block of code 

    // var x = 10;
    // if(10 === 10) {
    //     let x = 20;
    //     console.log(`From if block of code[Local] ${x}`);
    // }
    // console.log(`From global scope ${x}`);



    ///////////////////////////////////////////////////////////////////////////////////


    // Scope - Lexical (Static) L69

    /* Search
    - Execution Context
    - Lexical Environment
        -Understanding execution contexts is essential for understanding how JavaScript
        code is executed and how variables and functions are scoped.
        It can also help in debugging and troubleshooting code errors.

        - So while the two concepts are related, they are not the same thing. 
        The lexical environment defines the scope rules for identifiers in the code, while the execution context is created when a function is 
        invoked and determines how the code is executed.
    /*
    Lexical scope, also known as static scope, is a way of determining variable scope in a
    programming language. In JavaScript, lexical
    scope means that the scope of a variable is determined by its position within the source code.
    */


/*
    // let a = 3; 
    function parent() {
        let a = 10;
        console.log(`From parent function result is ${a}`);
        function child() {
            let a = 20;
            console.log(`From child function result is ${a}`);
            function grand () {
                let a = 30;
                console.log(`From grand function result is ${a}`);
            }
            grand()
        }
        child()
    }
    parent()
*/

///////////////////////////////////////////////////////////////////////////////////

// Challenge 1
    // Arrow Function Challenge L70
    // [1] One statement in function 
    // [2] Convert to arrow function 
    // [3] Print the output - the arguments may changes
    // [4] // output = String [Osama], [Mohamed], [Ali], [Ebrahim], [Ahmed], [Mai] => Done !
    // let names = function (...names) {
    //     // parameter 
    //     return names.join(" | ");
    // // }
    // Convert To arrow 
    // let names = (...names) => names.join(" | ");
    // console.log(`String ${names("[Osama]", "[Mohamed]", "[Ali]", "[Ebrahim]", "[Ahmed]", "[Mai]")} => Done!`);
// Challenge 1 Done!

// Challenge 2
    // [1] Replace ??? in return statement to get the output
    // [2] Create the same function with regular syntax
    // [3] Use array inside the argument to get the output
    // Output is 80    
    let myNumbers = [20, 50, 10, 60];
    let calc =(one, two, ...nums)=> one + two +nums[0];

    console.log(calc( 10 , myNumbers [0], myNumbers[1]));

     // let myNumbers = [20, 50, 10, 60];
    // let calc = (one, two, ...nums) => {
    //     let total = one + two;
    //     for(let i = 0; i < nums.length; i++) {
    //         total += nums[i];
    //     }
    //     for(let j = 0; j < myNumbers.length; j++) {
    //         total += myNumbers[j];
    //     }
    //     return total;

    // }
    // console.log(calc(10, "+", 20, 30));
    // let myNumbers = [20, 50, 10, 60];
    // let calc = (one, two, ...nums) => {
    //     let total = one + two;
    //     for(let i = 0; i < nums.length; i++) {
    //         total += nums[i];
    //     }
    //     return total;
    // }
    
    // let sum = 0;
    // for(let i = 0; i < myNumbers.length; i++) {
    //     sum += myNumbers[i];
    // }
    
    // console.log(calc(10, "+", 20, 30) + sum);