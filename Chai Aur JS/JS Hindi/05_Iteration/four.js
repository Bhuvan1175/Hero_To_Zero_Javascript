// for each

const coding = ["js", "python", "cpp", "java"];

coding.forEach(function (item) {
  console.log(item);
});

coding.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});

// [{},{}]
// array ke ander object ka access

const programming = [
  {
    languageName: "JavaScript",
    languageFileName: "js"
  },
  {
    languageName: "Javat",
    languageFileName: "java"
  },
  {
  languageName: "Python",
  languageFileName: "py"
  }
];

programming.forEach((item) => {
    console.log(item.languageName);
});