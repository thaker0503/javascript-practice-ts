// const array = [1,2,3,4,5,6,7,8,9];

// console.log("New Array ==>")
// console.log(array);

// //Push
// console.log("")
// console.log("PUSH")
// console.log("Adding An element at last ==>")
// array.push(10);
// console.log(array);

// //Unshift
// console.log("")
// console.log("UNSHIFT")
// console.log("Adding An element at first index and returning the new length ==>")
// console.log(array.unshift(0));

// //Pop
// console.log("")
// console.log("POP")
// console.log("Removing An element from last ==>")
// array.pop();
// console.log(array);

// //Shift
// console.log("")
// console.log("SHIFT")
// console.log("Removing an element from first and returning the removed value ==>")
// console.log(array.shift());

// //Accessing using the index
// console.log("")
// console.log("Using the index ==>");
// console.log("Before ==>");
// console.log(array);
// array[0] = 10;
// console.log("After ==>");
// console.log(array);

// // #######################################################################################################################################

// const names = ["Ram","Yatharth","Nityaa","Ram","Shyam","Drashtti","Ram","Amishaa"];

// //IndexOf Method
// console.log("")
// console.log("Using indexOf Method ==>");
// console.log(names);
// const a = "Ram";
// console.log(`Index of ${a}`)
// console.log(names.indexOf(a,2));

// //lastIndexOf Method
// console.log("")
// console.log("Using lastIndexOf Method ==>");
// console.log(names);
// const b = "Ram";
// console.log(`Index of ${b}`)
// console.log(names.lastIndexOf(b));

// //lastIndexOf Method
// console.log("")
// console.log("Using includes Method ==>");
// console.log(names);
// const c = "Ram";
// console.log(`Is ${c} present inside the names?`)
// console.log(names.includes(c));

// // #######################################################################################################################################

// console.log(" ")
// console.log("####################################################################");
// console.log(" ")
// console.log("Creating an array of reference data types")
// let students = [
//     {
//         name: "Yatharth",
//         marks: 95
//     },
//     {
//         name: "Amishaa",
//         marks: 97
//     },
//     {
//         name: "Shyam",
//         marks: 95
//     },
//     {
//         name: "Drashtti",
//         marks: 100
//     }
// ]
// console.log(" ")
// console.log("Students ==>")
// console.log(students);

// console.log("Using includes in students array");
// const x = {
//     name: "Yatharth",
//     marks: 9
// };
// console.log(`Checking if students includes ${x}`)
// console.log(students.includes(x));
// console.log("Hence we know that includes method does not work with reference data types");
// console.log("So instead of includes we will use find() method")
// console.log(" ")

// //find() Method
// console.log("Using find() Method ==>");
// console.log(students.find(ev => ev.marks === 100));


// //Concat()
// const names1 = ["a","b","c"]
// const names2 = ["x","y","z"]
// const names3 = names1.concat(names2)
// console.log(" ")
// console.log("Using Concat() ==>")
// console.log(names3)

// //Using Spread Operators
// const name = [...names,...names1,...names2]
// console.log(" ")
// console.log("Using Spread Operators ==>")
// console.log(name);


// //slice()
// console.log("")
// console.log("Using Slice() ==>")
// console.log(names3.slice(1,5))

// //using loops
// console.log("")
// console.log("Using Loops")

// //for loop
// console.log("")
// console.log("Using For loop ==>")
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element)
// }

// //forOf loop
// console.log("")
// console.log("Using For Of loop ==>")
// for (const i of names) {
//     console.log(i)
// }

// //forEach loop
// console.log("")
// console.log("Using ForEach loop ==>")
// names.forEach((i , index) => {
//     console.log(i, index)
// });

// //Join
// const new1 = ["Y","a","t","h","a","r","t","h"]
// console.log("")
// console.log("Using Join() ==>")
// console.log(new1.join(" "))


// //Split
// const new2 = new1.join(" ")
// console.log("")
// console.log("Using Split() ==>")
// console.log(new2.split(" "))

// //filter
// console.log("")
// console.log("Using filter() Method ==>");
// console.log(students.filter(ev => ev.marks === 95));

// //map 
// console.log("")
// console.log("Using Map() Method ==>");
// console.log(students.map((ev) => ev.marks = 100));
// console.log(students.filter(ev => ev.marks))

// //getting rid of duplicate items
// console.log("")
// console.log("Getting rid of duplicate items ==>")
// const arr = ["A","B","E","A","C","D","A","A","B","A","C","D","A","A","B","A","C","D","A","A","B","A","C","D","A"];
// console.log("Original Array ==> " + arr);
// const filtered = []
// for (let i of arr) {
//     if(!filtered.includes(i)){
//         filtered.push(i);
//     }
// }
// console.log("Filtered Array ==> " + filtered.sort());

// --> get new array from an old array by performing some function operations like  conditions for eg. if condition is true then do something if it's false then do something and finally get new array. 

const age = [10,18,5,25,35,42,60,8,12,7];



// const eligible = []
// const notEligible = []
// for (let i = 0; i < age.length; i++) {
//     if (age[i]>=18) {
//         eligible.push(age[i])
//     } else {
//         notEligible.push(age[i])
//     }
// }
// console.log("Eligible person ==> " + eligible)
// console.log("Not Eligible person ==> " + notEligible)