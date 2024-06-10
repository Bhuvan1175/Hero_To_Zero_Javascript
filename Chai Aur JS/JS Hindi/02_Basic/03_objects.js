// object literals se banega to singleton nhi banega .
// object constructors se  banega to singleton banega.
// -------------- Object Declration -------------
// Object Literals

const mySym=Symbol("Key1") // Symbol Declaring
// How you can add symbol in object
const JsUser = {
  name: "Bhuvi",
  "full name":"Bhuvan Bagde",
  [mySym]:"MyKey1", // this how we can add symbol as a key
  age: 21,
  location: "Nagpur",
  email: "bhuvan1175@gmail.com",
  isLoggedin: false,
  lastLoginDays: ["Mon", "Sat"],
};

// How To Access Object

console.log(JsUser.email);// this is right way , but there is another way
console.log(JsUser["email"]);
// Above method whay we used let in case our key name contains some spacing then we could not access bcuz of sapce  so we prefer to used second method. ex.
console.log(JsUser["full name"]);
//console.log(JsUser.full name) // this will throw error so second way is good for access objects
console.log(JsUser[mySym]);

// Object ki value change

JsUser.name="Pratik Bagde";

// Value locked

Object.freeze(JsUser);// its used for you dont want changes further in object so with help of we can stop changes used freez
JsUser.name="Rajendra Bagde";
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Good Morning Jsuser");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());