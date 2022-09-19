// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest
// describe("hello", () => {
//   // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//   it("returns a string that says hi", () => {
//     //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//     expect(hello()).toEqual("hi");
//   });
// });
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("eachPerson", () => {
  const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }];

  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {  
    expect(eachPerson(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]);

  });
});

// FAIL  ./code-challenges.test.js
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Pseudo Code: 
// Input: An array of objects 
// Take each object and capitalize the first letter of their name and make a story out of each object in the list
// Output: An array with a sentence about each person with their name capitalized.

// const eachPerson = (array) => { //junk code did not work at all returned empty array.
//   let newArr= []
//   for(i = 0 ; i > array.length; i ++){
//     newArr.push(array[i].toUpperCase)
//   }console.log(newArr)
//   return newArr;
// }
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }];

  const eachPerson = (arr) => {
    return arr.map(person => person.name                                //map over the array and split the letters
      .split(' ')
      .map(sepName => sepName.charAt(0).toUpperCase() + sepName.slice(1)) //then using another map use charAt to uppercase 1st letter then use slice to put the cap letter back into the string
      .join(' ') + ` is ${person.occupation}.`      //join the string back and concatenate with the occupation
      )
  }

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
describe("onlyRem", () => { 
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
  expect(onlyRem(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
  expect(onlyRem(hodgepodge2)).toEqual([ 2, 1, -1 ]);
  });
});
// // a) Create a test with an expect statement using the variables provided.
// FAIL  ./code-challenges.test.js
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
// b) Create the function that makes the test pass.
// Pseudo Code:
// Input will be an array and the output is also an array but with only numbers no words. THe numbers in the output are  just the remainders of the original numbers in the array divided by three. 
// Will have to divide all the numbers in the array once they are isolated from the strings by 3. Take the remainder and put into the new list.
const onlyRem = (arr) => {
  return arr.filter(str => typeof str === "number")  //filter method and typof to get only numbers
  .map(str => str % 3)                          //use map to get remainder of all nums in array /3
}
// PASS  ./code-challenges.test.js
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
describe("cuber", () => {
  const cubeAndSum2 = [0, 5, 10]
  const cubeAndSum1 = [2, 3, 4]
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cuber(cubeAndSum1)).toEqual(99);
    expect(cuber(cubeAndSum2)).toEqual(1125);
    
  });
});
// a) Create a test with an expect statement using the variables provided.
//  FAIL  ./code-challenges.test.js
// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
// Pseudo Code: input will be an array of numbers.  
//Cube each number in array 
//sum up all the nums in the array
//output will be first to sum up the numbers in the array and them cube them. 

const cubeAndSum2 = [0, 5, 10]
const cubeAndSum1 = [2, 3, 4]
//this was the first way I got it to pass. was having blocker on the map the reduce wouldn't work until added function inside it.
// const cuber = (arr) => {
//   let sumArr = 0                              //declare sum to zero
//   for (let i = 0; i < arr.length; i++ ){      //iterate thru array
//       ( sumArr += arr[i]**3)                  //add up nums in array then cube
//   }   return sumArr                           //return the sum cubed
// }

    const cuber = (arr) => {  
        //  declare a variable to map               
        let x = arr.map(value => (value**3))     //this finally works!
      //  return x and reduce it to get sum using the method 
        return x.reduce((x, y)=> x+y)      
    }
