
let students = [
    {
        id: 1,
        name: "Mostafa Mohamed",
        age: 28,
        city: "Cairo",
        grade: 95,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS"]
    },
    {
        id: 2,
        name: "Ali Hassan",
        age: 17,
        city: "Alex",
        grade: 60,
        isGraduated: false,
        skills: ["HTML"]
    },
    {
        id: 3,
        name: "Sara Ali",
        age: 24,
        city: "Mansoura",
        grade: 88,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS", "React"]
    }
];

//Number of students
console.log(`Number of students : ${students.length}`);
console.log("----------------------------------------");

//print the first name of students
console.log(`first name of students : ${students[0].name}`);
console.log("----------------------------------------");

//print the last name of students
console.log(`last name of students : ${students[students.length-1].name}`);
console.log("----------------------------------------");

//print all student name by using loop
for(let i = 0; i < students.length; i++){
    console.log(` student name ${students[i].id} : ${students[i].name}`);
}
console.log("----------------------------------------");

//print all students  each student with all data
for(let i = 0; i < students.length; i++){
    console.log(`Name : ${students[i].name}`);
     console.log(`Age : ${students[i].age}`);
      console.log(`city : ${students[i].city}`);
       console.log(`Grade : ${students[i].grade}`);
       console.log("    ");
}

//print student name of student have age >18
students.forEach(students=>{
if(students.age>18){
    console.log(`student have age >18 (${students.id}) : ${students.name}`);   
}
})
console.log("----------------------------------------");

//print student name of student have grade >90
students.forEach(students=>{
if(students.grade>90){
    console.log(`student have grades>90 (${students.id}) : ${students.name}`);  
}
})
console.log("----------------------------------------");

//print student of graduated
students.forEach(students=>{
if(students.isGraduated===true){
    console.log(`student graduated (${students.id}) : ${students.name}`);
}
})
console.log("----------------------------------------");

//print summation of grads students && Average
let totalGrade=0
for(let i = 0; i < students.length; i++){
   totalGrade += students[i].grade;  
}
console.log(`sum of grades : ${totalGrade}`);
console.log("----------------------------------------");
console.log(`Average of grade : ${totalGrade/students.length}`);
console.log("----------------------------------------");

//print higher grade
let maxGrade=students[0].grade;
students.forEach(students=>{
if(students.grade >maxGrade){
    maxGrade=students.grade;
}
})
  console.log(`Higher Grades (${students.id}) : ${maxGrade}`);
console.log("----------------------------------------");

//print Lower grade
let minGrade=students[0].grade;
students.forEach(students=>{
if(students.grade <minGrade){
    minGrade=students.grade;
}
})
  console.log(`lower Grades (${students.id}) : ${minGrade}`);
console.log("----------------------------------------");


//print sorting on order to Name && reverse
let names = students.map(students=>students.name);

console.log(`order to Name : ${names.sort()}`);
console.log("----------------------------------------");
console.log(`Reverse : ${names.reverse()}`);
console.log("----------------------------------------");


//Strings  

//print number of letter of name && first letter && Last Letter
students.forEach(student=>{
   console.log(`Number of Letter : ${student.name.length}`);
   console.log(`first Letter : ${student.name[0]}`);
   console.log(`last Letter : ${student.name[student.name.length-1]}`);

console.log("");
})
console.log("----------------------------------------");

//convert the name into Capital && Small && "Ali" exist or not  && divied into two letter split && join && trim
students.forEach(student=>{
   console.log(`Capital Name : ${student.name.toUpperCase()}`);
   console.log(`Small Name : ${student.name.toLowerCase()}`);
   console.log(`if the namw exist or not  : ${student.name.includes("Ali")}`);
   console.log(`divied Name into two letter : ${student.name.split(" ")}`);
   console.log(`Join Name : ${student.name.split(" ").join(" ")}`);
   console.log(`delete the space from Name : ${student.name.trim()}`);
   console.log("");
})
console.log("----------------------------------------");

// Arrays

students.forEach(student=>{

    // print Number of skills of each student
    console.log(`Number of skills : ${student.skills.length}`);

   //print all skills
   console.log(`display all skills : ${student.skills}`);

    // Add new skills
    console.log(`Add new skills : ${student.skills.push("JavaScript")}`);

    // delete last skills
    console.log(`delete last skills : ${student.skills.pop()}`);

    // check if student know js or not
    console.log(`check if student know js or not : ${student.skills.includes("JS")}`);

    // reverse skills order
    console.log(`reverse skills order : ${student.skills.reverse()}`);

    // order skills
    console.log(`order skills : ${student.skills.sort()}`);

    // convert skills into string
    console.log(`convert skills into string : ${student.skills.join(", ")}`);

});

