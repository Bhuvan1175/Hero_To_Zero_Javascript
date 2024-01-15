// Create an application with following role.
//admin : get full access
//subadmin : get access to create/delete course
//testprep : get access to create/delete test
//student : get access to consume content

var user = "admin";
switch (user) {
  case "admin":
    console.log("Get Full Access");
    break;
  case "subadmin":
    console.log("Get Access To Create/Delete Course");
    break;
  case "testprep":
    console.log("Fet Access To Create/Delete Test");
    breake;
  case "student":
    console.log("Get Access To Consume Content");
    breake;
  default:
    console.log("User Trials");
    break;
}
