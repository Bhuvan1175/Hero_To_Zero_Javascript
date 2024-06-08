// Dates

let myDate=new Date();
console.log(myDate.toString());// It will Give day, Month , Date, Year and Time as a indian standard time.
console.log(myDate.toISOString());// its give in YYYYMMDD format
console.log(myDate.toUTCString());//Sat, 08 Jun 2024 09:21:01 GMT
console.log(myDate.toDateString());// Returns a date as a string value. --> Sat Jun 08 2024
console.log(myDate.toLocaleDateString());//Converts a date to a string by using the current or specified locale. --> 8/6/2024
console.log(myDate.toLocaleString());// it gives date and time localy --> 8/6/2024, 2:53:42 pm
console.log(myDate.toJSON());// This method is especially useful when you need to serialize dates for JSON output. --> 2024-06-08T09:24:40.686Z
console.log(typeof(myDate));
// Declaring date 
let myCreatedDate=new Date(2023,0,12,21,45,15);
let myCreatedDateTime=new Date(2023,0,12,21,45,15);
console.log(myCreatedDateTime.toLocaleString());
let myCreatedDate1=new Date("2023-01-12");//yy-mm-dd
let myCreatedDate2=new Date("02-13-2024");//mm-dd-yy
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());

// Date Methods
let Newdate=new Date();
console.log(Newdate);
console.log(Newdate.getTime());
console.log(Newdate.getMonth()+1);
console.log(Newdate.getFullYear());
console.log(Newdate.getHours());