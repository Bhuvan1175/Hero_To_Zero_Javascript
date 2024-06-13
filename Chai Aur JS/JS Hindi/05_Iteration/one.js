// For Loop
//Continue
for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    continue;
  }
  console.log(element);
}

// Break

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    break;
  }
  console.log(element);
}

// nested Loop
// Table Print
for (let i = 1; i < 11; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 1; j < 11; j++) {
    // console.log(`Inner loop ${j}`);
    console.log(i + "X" + j + "=" + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
