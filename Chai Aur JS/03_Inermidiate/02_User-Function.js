// Define a function that can access he role of user
// User Can be in following role -->
// Create an application with following role.
// admin : get full access
// subadmin : get access to create/delete course
// testprep : get access to create/delete test
// User : get access to consume content

var getUserRole = function (Name, Role) {
  switch (Role) {
    case "Admin":
      return `${Name} is Admin with get full access.`;
      break; // its not necesary, once return is executed.
    case "Sub-Admin":
      return `${Name} is Sub-admin which get access to create/delete course.`;
      break;
    case "Testprep":
      return `${Name} is Role is TestPrep and they have access to create/delete test.`;
      break;
    case "User":
      return `${Name} is A User , Role is To Get Access to consume content`;
      break;
    default:
      return `${Name} is Get only Trial`;
      break;
  }
};

// console.log(getUserRole("Bhuvi", "User"));
// For This Printing you have to link this js with HTML File.
var userName=prompt("Enter User Name :");
var userRole=prompt("Enter Role Of User :");
console.log(getUserRole(userName,userRole));
