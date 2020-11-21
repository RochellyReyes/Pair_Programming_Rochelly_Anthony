/*Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
Example:
Input: String 1: So dark the con of man
 String 2: Madonna of the Rocks
Output: True
Input: String 1: Things are good
	  String 2: Dogs eat ants
Output: False*/

function anagram(phrase1, phrase2) {
	let firstString = phrase1.split("");
	let secondString = phrase2.split("");

	let transformFirst = firstString.reduce((acc,curr) => {
		
		if(curr !== " ") {
			acc.push(curr.toLowerCase());
		};
		return acc;

	}, []).sort();
	

	let transformSecond = secondString.reduce((acc,curr) => {
		
		if (curr !== " ") {
			acc.push(curr.toLowerCase());
		};
		return acc;
	}, []).sort();

	return transformFirst.every((value,index) => value === transformSecond[index]);

}

console.log(anagram("So dark the con of man", "Madonna of the Rocks" ));
console.log(anagram("Things are good", "Dogs eat ants"));
