// Operator Precendence :- This is general order of solving an expression.
// precendence mean priority.
/*
    1) ( )
    2) **
    3) *,/,%
    4) +,-  
    5) ++,--,+=,-=
    6) =,+=,-=
    7) &&
    8) ||
    9) ?:
*/

expression=(2*4+5)/6*6+6-8;
// how it solve 
// firstly solve brackates --> in which we have to follow precendence 
// then solve multiplication and then add --> 13
// divide 13/6 * 6+6-8 --> 
// it will form 13+6-8--> 19-8 --> 11 is the answer
console.log(expression);