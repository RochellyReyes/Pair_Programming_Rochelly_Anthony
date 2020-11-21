/*Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 
Example 1:
Input: gdc_two_numbers(336,360)
Output: 24

Example 2:
Input: gdc_two_numbers(78,126)
Output: 6
*/

//Recurrsion
function gcd(x, y) {
    if (y === 0) {
        return x;
    } 
    return gcd(y, x % y);
};

console.log(gcd(360, 336));
console.log(gcd(78, 126));

