// Higher order function  - Map L71


/*
        - Is a function that accepets as parameters and/or returns a function.
        - higher-order function is a function
        that takes one or more functions as arguments or returns a function as its result. 
 */       
        // map:
            // - Method creates a new array 
            // - Populated with the results of calling a provided function on every element 
            // - in the calling array 
        
        // Syntaxx Map(callbackfunction(element, index, array) {}, thisarg)
            // - Element => The current element being processed in the array 
            // - Index => the index of the current element being processed in the array 
            // - Array => The current array 
        
        // [Notes] :
        // Maps returns a newa array
        // [Examples]
        // - anonymous function 
        // - named function 

        // let myNums = [1, 2, 3, 4, 5 ,6 ];
        // let newArray = [];
        // for (let i = 0; i < myNums.length; i++) {
        //     newArray.push(myNums[i] + myNums[i]);
        // }
        // console.log(newArray);

        // let addSelf = myNums.map(function(element, index, array) {
        //     return element + element;
        //     // console.log(`Current element ${element}`);
        //     // console.log(`Current index ${index}`);
        //     // console.log(`Current array ${array}`);
        //     // console.log(`This ${this}`);
        // }, 10)
        // console.log(addSelf);
        // let myNums = [1, 2, 3, 4, 5 ,6 ];
        // let newArray = [];
        // for (let i = 0; i < myNums.length; i++) {
        //     newArray.push(myNums[i] + myNums[i]);
        // }
        // console.log(newArray);

        // let addSelf = myNums.map(a => a + a);
        // console.log(addSelf);

        // function addition(element) {
        //     return element + element;
        // }
        // let add = myNums.map(addition);
        // console.log(add);

    /*/////////////////////////////////////////////////////////////*///////////////*/
    // Higher order function  - Map practice 


    // let swapingCases = "eLZERo";
    // let invertudeNumbers = [1, -10, -20, 15, 100, -30];
    // let ignoreNumbers = "Elz13er4o";

    // 1- Split() convert to array
    // let sw = swapingCases.split("").map(function (ele) {
    //     // conditio ? True : False 
    //     return ele === ele.toUpperCase() ?  ele.toLowerCase(): ele.toUpperCase();
    // })
    // .join("")

    // Arrow function version 
    // let sw = swapingCases.split("").map((ele) => (ele === ele.toUpperCase() ?  ele.toLowerCase(): ele.toUpperCase())).join("");
    // console.log(sw);

    // let inv = invertudeNumbers.map(function (e) {
    //     return -e;
    // })  
    // console.log(inv);

    // Arrow function version 
    // let inv = invertudeNumbers.map((e) => -e); 
    // console.log(inv);

    // let ign = ignoreNumbers.split("").map(function(a) {
    //     return isNaN(parseInt(a)) ? a : "";
    // })
    // .join("")
    // console.log(ign);

    // Arrow function version 
    // let ign = ignoreNumbers.split("").map((a) => isNaN(parseInt(a)) ? a : "")
    // .join("");
    // console.log(ign);


    /*/////////////////////////////////////////////////////////////*///////////////*/
    // Higher Order Function -Filter L73


    /* 
    the filter() function is called on an array and creates a new array
    with all the elements that pass a certain test implemented by a provided function.
    */


    // Get friends with name starts with A
    // let friends = ["Ahmed", "Israa", "Aymen", "Sara", "Asmaa", "Ibrahim", "Sameh"];
    // Return Even Numbers
    // let numbers = [11, 20, 2, 5, 17, 10];
    // let filtered = friends.filter(function(ele) {
    //     return ele.startsWith("A") ? true : false;
    // }).join(" | ");
    // console.log(filtered);

    // Arrow version 
    // let evenNumb = numbers.filter((ele) => ele % 2 === 0) ? true : false;

    // let evenNumb = numbers.filter(function(ele) {
    //     return ele % 2 === 0;
    // }).join(" | ");
    // console.log(evenNumb);
    
    
    // test Map vs Filter 

    // let addMap = numbers.map(function(el) {
    //     return el + el;
    // })
    // console.log(addMap);

    // let addFilter = numbers.filter(function(el) {
    //     return el + el;
    // })
    // console.log(addFilter); // if it true the array will return as it was


    /*/////////////////////////////////////////////////////////////*///////////////*/
    // Higher Order Functions - Filter Practice L74

    /*
    let sents = "I love foood to code playing too much"

    let words = sents.split(" ").filter(function (ele) {
        return ele.length <= 4;
    }).join(" ")
    console.log(words);

    let mix = "A13BS27ZX";

    let mixedContent = mix.split("").filter(function (ele) {
        return !isNaN(parseInt(ele));
    })
    .map(function(ele) {
        return ele * ele;
    })
    .join("");
    console.log(mixedContent);
    */

    /*/////////////////////////////////////////////////////////////*///////////////*/
    // Higher order function -reduce L75 


    /* 
    - Reduce
        -- Method excutes a reduser function on each element of the array,
        -- resulting in a single output value

        Syntax
        reduce(callBackFunction(Accumulator, Current Value, Current Index, Source Array { }, initiavalue))
        - Accumulator :
        - Current Value
        - Current Index
        - Source Array 
    */
    /*
    let nums = [10, 20, 15, 30];

    let add = nums.reduce(function(acc, current, index, arr) {
        console.log(`Accumulator is ${acc}`);
        console.log(`Current element is ${current}`);
        console.log(`Index is ${index}`);
        console.log(`Array is ${arr}`);
        console.log(acc + current);
        console.log("##############")
        return acc + current ;
    }, [intiaValue] 5);
    console.log(add);
    */


    /*/////////////////////////////////////////////////////////////*///////////////*//*/////////////////////////////////////////////////////////////*///////////////*/
    // Higher order function - reduce practice L76


    /* 
    - Longest Word
    - Remove Characters + Use reduce()
    */
    /*
    let Bigst = ["Bla", "Probaganda", "Other", "AAA", "Battery", "Test", "Probaganda_two"];
    let mString = ["E", "@", "@", "L", "@", "Z", "@", "E", "@", "@", "R", "@", "O"];
    let chek = Bigst.reduce(function (acc, current) {
        console.log(`Acc => ${acc}`);
        console.log(`Current Element => ${current}`);
        console.log(acc.length > current.length ? acc : current);
        console.log(`#################`);
        return acc.length > current.length ? acc : current;
    })
    console.log(chek);

    let remvCharacters = mString.filter(function (ele) {
        return !ele.startsWith("@"); //  ? !ele.startsWith("@") : ele // condition 
    }).reduce(function(acc, current) {
        return `${acc}${current}`;
    });
    console.log(remvCharacters);
    */

    /*/////////////////////////////////////////////////////////////*///////////////*//*//////////
    // Higher order function - Foreach and practice L77

    /*
    let lis = document.querySelectorAll("ul li");
    let divs = document.querySelectorAll(".content div");

    lis.forEach(function(ele) {
        ele.onclick = function() {
            // remove active class from all lis 
            lis.forEach(function(ele) {
                ele.classList.remove("active");
            });
            // add active to all lis
            this.classList.add("active");
            divs.forEach(function(ele) {
                ele.style.display = 'none';
            });
        }
    });
    */


    /*/////////////////////////////////////////////////////////////*///////////////*//*//////////
    // Higher order function challenge L78
    /* 
    You can use
        - ,
        - _
        - space
        - True => 1 => One time only in the code
    You can't use 
        - Numbers 
        - letters
        
    You must use 
        - [filter, map, reduce, + your knowldge]
        - order is not important
        - all in one chain
    */
    // Solution 
    /*
    let mystring = "1,2,3,EE,l,z,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

    let solve = mystring.split(",").filter(function(ele) {
        return isNaN(parseInt(ele)); // remove all numbers
    }).map(function(ele) {
        return ele === "_" ? ele = (" ") : ele; // remove underscores
    }).slice(0, -1).reduce(function(acc, current) {
        return `${acc}${current}`;
    }).slice(1);
    console.log(solve);
    */

    