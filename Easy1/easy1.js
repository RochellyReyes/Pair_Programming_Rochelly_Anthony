/*Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
Example:
Input: [2, 4, 7, 11, 15, 16]

Output: Even numbers: [2, 4, 16]
      Odd Numbers: [7, 11, 15]*/
      


function findnums(arr) {
    //if this number divides has a remainder of 0 after being divided by 2 then it is even
    var evens = arr.filter(number => number % 2 == 0);
    console.log(`Even numbers are ${evens}`);


    //if this number divides has a remainder of 1 after being divided by 2 then it is odds
    var odds = arr.filter(number => number % 2 == 1);
    console.log(`Odd numbers are ${odds}`)
}

findnums([1, 2, 3, 4, 5]);
findnums([2, 4, 7, 11, 15, 16]);
