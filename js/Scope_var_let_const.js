// Difference between var,let,const

/*

No one prefers using "var" because it allows reassigning the variable. 
For example :-

var x =1;
var x =2;
output :- 2

but 
let x =1;
let x=2;
output:- Syntax error because we can't allocate two values to same variable and that's why we prefer let.

also
let x=1;
x=2;

var x=1;
x = 2;

both will give output :- 2

but 
const x=1;
x=2;
output:- error because const makes the variable constant and it's value can't be changed throughout the code.


*/