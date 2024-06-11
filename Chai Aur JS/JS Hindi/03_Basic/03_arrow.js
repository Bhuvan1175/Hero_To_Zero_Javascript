const user = {
  username: "bhuvi",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // current context, context mean value ya fir kis bare main hain ye batata hai
    // console.log(this);
  },
};
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);

function chai2() {
  let username = "bhuvi;";
  console.log("Yes", this.username); // used only in object
}
chai2();

const chai1 = function () {
  let username = "bhuvi;";
  console.log(this.username);
};
chai1();
// ------------------ Arrow Function ----------------

const chai = () => {
  let username = "bhuvi;";
  console.log(this);
};

chai();

// ---------------- arrow function syntax ------------------

// Method to implicit return

const addTwo1 = (num1, num2) => num1 + num2;

const addTwo2 = (num1, num2) => num1 + num2;

// Explicit Return
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(`Add : ${addTwo(3, 4)}`);

// Diffrence Between Regular Function and arrow function

// 1) Writting diffrence
// Regular Function Syntax
function code() {}
// Arrow Function syntax
const myCode = () => {};

// 2) Argument object are not available in arrow function.

// Argument Object Avialable on Normal Function

function tew(a, b) {
  console.log(arguments);
  return a + b;
}
tew(3, 4);

// Argument object are not available in arrow function.

const add = (a, b) => {
  console.log(arguments);
  return a + b;
};
add();
//  arguments is not defined this type of error throw

// 3) Regular function created using function declaration or expression are 'constrctible' and 'callable'.

// 4) Arrow function do not have their own this.

let userInfo = {
  name: "mythpat",
  fullName1() {
    const testArrowThis = () => {
      console.log(`Thik Hai Bhai ${this.name}`);
    };
    testArrowThis();
    console.log(`Hello ${this.name}`);
  },
  fullName2: () => {
    console.log(`Bolo Bhai ${this.name}`);
  },
};
userInfo.fullName1();
