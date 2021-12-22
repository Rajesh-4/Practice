console.log("open")
console.log("happy")
const school={
    schoolName:"MAYURBHANJ SCHOOL",
    year:9878,
    location:",ODISHA",
    math:"very good",
    age:90

};
// const schooName=school.schoolName;
//  const locatin=school.location;
//  console.log(school)
//  console.log(schooName)
// let{schoolName,lctn}=school;
// console.log(schoolName)
// console.log(school)
// let codt=[5,6,6,7,"w"]
// console.log(codt.length)
// let{year:var1,...var2}=school
// console.log(year)
// console.log(var2)

// OBJECT INSIDE ARRAY
const users=[    
                {userid:1,username:"RAJESH"},
                {userid:2,username:"RAJA"}
           ]
// console.log(users)
// for  (let user of users)
//            {
//                console.log(user.userid,user.username)
//            }
// const[user1,user2]=users
// console.log(user1)
const[{username},{userid}]=users
console.log(username,userid)



// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
let a=[]
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    for(k in student){
    console.log(k)
    a.push(k)
    }
    console.log(a)