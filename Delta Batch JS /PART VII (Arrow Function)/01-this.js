// 'This' keyword refers to an object that is executing the current piece of code.

let student={
    name:"bhuvi",
    age:21,
    math:83,
    eng:80,
    sci:90,
    getAvg(){
        let sum = this.math + this.eng + this.sci;
        return sum / 3;
    }
}
console.log(student.getAvg());
