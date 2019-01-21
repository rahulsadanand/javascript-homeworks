/* language choosen english*/

/*
var:- used to declare a variable.variables declared using var are of global scope for the program. meaning the life 
cycle of variable will last until the end of the program, whether or not the program requires.
*/



/*
let:- used to scopped variables, i;e the variable life cycle will start at the line that its declared with let keyword
and continue until the block code containing the key ends.
*/

/*
const:- the const keyword is used to declare constants, any variable declared as a const will contain the same value
and any mathematical functions cannot manipulates it, unless the datastructure defined is not variable but an object or an
array in which case we can manipulate the datastruture using inbuilt functions.the scope of a variable declared as 
a const is restricted to the block in which its declared.
*/

/*
hoisting: the javascript interpret by default moves all variable and function declaration's to the top of the program
making them the very first lines to be interpreted irrespective of how the program was orignally structured by the 
programmer, this action is known as hoisting.

however this its important to note that the interpreter only moves the declaration not the initiation, which is still
done as per the programmer's intent

because of this its possible to reference a variable before its declaration, however the value contained by it will
always be undefined*/

count=0; // example of hoisting
const limit=11; // example of const
while(count<limit)
  {
    
      if(count===10)
      {
       let message="loop ends now"; //example of let
       console.log(message);
       }
      else
      {
       let message="javascript says hi"; //example of let
       console.log(message);
      }
    var count=count+1;
    //console.log(message)--> gives an error as message is out of scope hence undefined
}

console.log(count) // gives a perfect output as the variable as global scope
//console.log(limit=limit+1)--> gives an error:attempting to override a constant