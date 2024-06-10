// How to declare object with help of Constructors.
const tinderUser=new Object(); // Singleton Object
const TinderUser={};//Non Singleton objects

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email:"sam@gmail.com",
    fullname:{
        userfullname:{
           firstName:"Bhuvi",
           lastName:"Bagde" 
        }
    }
}
console.log(regularUser.fullname.userfullname.firstName);

// Object Combining
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

// using Spread Operator
const obj4={...obj1,...obj2}
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// to checked property available or not

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Object Destructuring

const course={
    courseName:"Js In Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// console.log(course.co urseInstructor);

const {courseInstructor:tutor}=course
console.log(tutor);