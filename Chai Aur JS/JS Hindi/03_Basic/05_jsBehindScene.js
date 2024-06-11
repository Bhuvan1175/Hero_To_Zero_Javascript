/*Execution Context

{}--> Global EC then it refer to 'this'.
Type Of Execution Context 

1) Global EC --> 

2) Functional EC --> 

3) Eval EC --> 

{} --> Js Code
# Two Phases se run hote he js code 
--> 1) Memory Creation Phase.
        Used to allocated space for the declare variable,thst wil not executed only allocated space.
--> 2) Execution Phase



*/

let Val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/*

1) Global Execution se hoga 

# First Cycle
2) Memory Phase --> sare variable ko space allocate hoga
    val1=undefined
    val2=undefined
    addNum=defination
    result1=undefined
    reult2=undefined

# second Cycle
3) Execution Phase
    val1=10
    val2=5
    addNum --> ye alag execution context banayega --> 1) new Variable Enviroment + Execution Thread

4) addNum -> Memory Phase
    val1->undefined
    val2->undefined
    total->undefined

5) Execution context 
    num1-> 10
    num2-> 5
    total -> 15
At end Global EC main Total value return hoga

6) jo naya ec create hua tha o kaam hone ke baad delete ho jayega.

7) result1 -->15

8)  3) Execution Phase
        val1=10
        val2=2
        addNum --> ye alag execution context banayega --> 1) new Variable Enviroment + Execution Thread
    4) addNum -> Memory Phase
        val1->undefined
        val2->undefined
        total->undefined
    5) Execution context 
        num1-> 10
        num2-> 2
        total -> 12

*/

// Call Stack 
/*

1) Global Execution Context 
2) Its just like a stack 
3) Let say when you have 3 method function and and they are enter in call stack so it will follow "Last In First out (LIFO)" 
   for execution


*/
