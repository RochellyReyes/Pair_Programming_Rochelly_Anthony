/*Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
Example 1:
Input: vowelChecker(‘b’)
Output: ‘This is not a vowel’
Example 2:
Input: vowelChecker(‘a’)
Output: ‘This is a vowel’
Example 3:
Input: vowelChecker(‘y’)
Output: ‘This is sometimes a vowel’*/

    function vowelChecker(x){
        if (x.length == 1) {
                if (x == "A" || x == "a" || x == "E" ||  x == "e" || x == "I" || x == "i" || x == "O" || x == "o" || x == "U" || x == "u") {
                    result = true;
                    console.log(`${x} is a vowel`);  
                } else if (x == "y") {
                    result = true;
                    console.log(`${x} is a sometimes a vowel`);  
                } else {
                    result = false;
                    console.log(`${x} is not a vowel`);
                }
            return result;
            };
        };

        console.log(vowelChecker('b'));
        console.log(vowelChecker('a'));
        console.log(vowelChecker('y'));


