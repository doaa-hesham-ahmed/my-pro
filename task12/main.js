// // 🧠 Task - JavaScript (ES6 + Loops + Higher Order Functions)


// // Part 1 - Choose

// /*
// 1) إيه اللي بيرجعه map() ؟

// Answer:
// [x] Array جديدة بنفس الطول


// 2) مين فيهم بيرجع أول عنصر يحقق الشرط؟

// Answer:
// [x] find()


// 3) filter() بيرجع...

// Answer:
// [x] Array جديدة بالعناصر اللي حققت الشرط


// 4) forEach() بيرجع...

// Answer:
// [x] undefined


// 5) for...of بنستخدمها غالباً مع...

// Answer:
// [x] Arrays

// */


// // Part 2 - True or False
// /*
// 1. map() بيغير الـ Array الأصلية.
// Answer: False 

// 2. filter() ممكن يرجع Array فاضية.
// Answer: True 

// 3. find() ممكن يرجع undefined.
// Answer: True 

// 4. for...in بيلف على الـ Index بتاع الـ Array.
// Answer: True 

// 5. forEach() ينفع أعمل بيها break.
// Answer: False 

// */


// // ===============================
// // Part 3 - Complete the following
// // ===============================


// // Q1
// // Print:
// // 2
// // 4
// // 6
// // 8

// const numbers = [1,2,3,4];

// numbers.forEach((num)=>{
//     console.log(num * 2);
// });


// // ===============================


// // Q2
// // Get numbers bigger than 20

// const nums = [10,25,5,30,15,40];

// const result = nums.filter((num)=>{
//     return num > 20;
// });

// console.log(result);


// // Output:
// // [25, 30, 40]


// // ===============================


// // Q3
// // Get first user age > 25

// const users = [
//     {name:"Ali", age:20},
//     {name:"Sara", age:28},
//     {name:"Omar", age:30}
// ];

// const user = users.find((item)=>{
//     return item.age > 25;
// });

// console.log(user);


// // Output:
// // {name:"Sara", age:28}


// // ===============================


// // Q4
// // Convert names to Uppercase

// const names = ["ali","mona","ahmed"];

// const upperNames = names.map((name)=>{
//     return name.toUpperCase();
// });

// console.log(upperNames);


// // Output:
// // ["ALI","MONA","AHMED"]



// // ===============================
// // Part 4 - To Do
// // ===============================

// const fruits = ["Apple","Banana","Orange"];


// // 1) Print every element using for...of

// for(const fruit of fruits){
//     console.log(fruit);
// }


// // Output:
// // Apple
// // Banana
// // Orange



// // 2) Print Index using for...in

// for(const index in fruits){
//     console.log(index);
// }


// // Output:
// // 0
// // 1
// // 2



// // 3) Print using forEach

// fruits.forEach((fruit,index)=>{
//     console.log(`${index} -> ${fruit}`);
// });


// // Output:
// // 0 -> Apple
// // 1 -> Banana
// // 2 -> Orange



// // ===============================
// // Part 5 - To Do
// // ===============================


// // Q1 Convert function to Arrow Function


 // Before:
// // function sum(a,b){
// //     return a+b;
// // }


// // After:

// const sum = (a,b)=>{
//     return a+b;
// };


// // Short version:

// const sum2 = (a,b)=> a+b;


// console.log(sum(5,3)); // 8

// Q2 - Destructuring
const user = {
    name: "Mostafa",
    age: 25
};

const { name, age } = user;
console.log(name);
console.log(age);

// Q3 - Template Literal
console.log(`Hello ${name}`);

// Q4 - Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Part 6
const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];

// 1) Array of students' names
console.log(students.map(student => student.name));

// 2) Students with degree >= 60
console.log(students.filter(student => student.degree >= 60));

// 3) First student with degree > 90
console.log(students.find(student => student.degree > 90));

// 4) Print students' names using forEach()
students.forEach(student => console.log(student.name));


// Bonus - reduce()
const numbers = [5, 10, 15, 20];
console.log(numbers.reduce((sum, number) => sum + number, 0));