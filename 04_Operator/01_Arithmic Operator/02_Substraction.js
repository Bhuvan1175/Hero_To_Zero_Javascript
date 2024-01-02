//Write A Javascript code to give me the total of following items , in which custmer has get a discount of 135 rs and sandwich is free then what amount he will pay ?
/*

        Pizza       : 199 rs
        Burger      : 145.57 rs
        Sushi       : 342.98 rs
        Idli        : 30 rs
        Soup        : 99 rs
        Icecream    : 35 rs
        Cream Roll  : 75 rs
        Sandwich    : 65 rs

 */

//CODE START 

var Pizza = 199.9;
var Burger = 145.5;
var Sushi = 342.9;
var Idli = 30.2;
var Soup = 99.0;
var Icecream = 35.0;
var CreamRoll = 75.0;
var Sandwich = 65.0;
var discount = 135

var Cost = Pizza + Burger + Sushi + Idli + Soup + Icecream + CreamRoll - Sandwich - discount;
console.log("The Total Cost Of The Meal of custmer : "+Cost);