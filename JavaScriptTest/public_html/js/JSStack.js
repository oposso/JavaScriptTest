/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// ITriage JavaScript coding test 02/11/15 
//Implement a stack (push and pop functionality)

var stack = [];
stack.push(1);       // stack equals [1]
stack.push(2);       // stack now equals [1, 2]
var i = stack.pop(); // stack now equals [1]
alert(i);            // prints 2
// and so forth

//Reverse an array of n items -  Strings
var names = ["Oliver", "Alexander", "John", "Thomas", "Ebenezer"];
//use Javascript reverse method
names.reverse();

/*Print out the even numbers from 0 to 100 - inclusive*/
//variable array to hold all the value to print
var line=[];
var counter = 0;

for (var i = 0; i <= 100; i++) {
  if (i%2===0){
      //print each one as it is encountered
      console.log(line);
      //add each of these values to the array for use later
      line[counter] = i;
      counter++;
    }
  }
//print them all out
console.log(line);