// How to create Promises
// What is Promises ?
// Promise is an object that represented the completion or failure of the async operation or resulting value.

// Part I

const promiseOne = new Promise((resolve, rejected) => {
  setTimeout(() => {
    console.log("Hello Bhuvi");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

// Part II

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello Bhuvi");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise Connected Successfully");
});

// Part III

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello Bhuvi");
    resolve({ username: "bhuvi", pasword: "123" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user.username);
});

// Part IV

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Bhuvan", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });

// Part V

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Bhuvan", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function getAllUser() {
  try {
    const respose = await promiseFive;
    console.log(respose);
  } catch (error) {
    console.log("Try After Some Time");
  }
}
getAllUser();

// Part VI

fetch("https://api.github.com/users/Bhuvan1175")
  .then((response) => {
    return response.json();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
