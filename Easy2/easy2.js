/*EASY (2)
Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
Example1:
Input: numArray = [1,2,3,4,5,6,7,8,9,10]
Output: primeArray = [2,3,5,7]
Example 2:
Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
Output: primeArray = [19 ,29 ,47 , 83]
*/

function primeNumbers(arr) {
    //.filter creates a new array when it is equal to true
    return arr.filter((number) => {
        if (number < 2) {
            return false;
        }
        //.sqrt returns the square root of the number 
        //if the number is divisiable and has no remainder then it equales false
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        
        return true;
    });
}

console.log(primeNumbers([1,2,3,4,5,6,7,8,9,10]));
console.log(primeNumbers([10, 18, 19, 29, 33, 35, 47, 66, 83]));







