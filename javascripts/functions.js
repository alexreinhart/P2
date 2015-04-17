//A
var isArmstrong = function(n) {
	"use strict";
	var sum = 0;
	//convert to String
	n = String(n);
	//traverse n
	for(var i = 0; i < n.length; ++i)
		sum = sum + Math.pow(Number(n[i]), n.length);
	if(Number(n) == sum) {
		return true;}
		else {
			return false;
		}
};

//B
var allArmstrongs = function() {"use strict";
//array to contain armstrong ##
//go through potential three digit ##
//include armstrong ## within array
var armstrongArray = []; for(var i = 1; i < 100000; ++i) {
	if (isArmstrong(i)) {armstrongArray.push(i);}
}
//empty string
//find armstrong ## and add to finalString
var finalString = ""; for(var j = 0; j < armstrongArray.length; ++j) {
	finalString += armstrongArray[j] + ' ';
} console.log(finalString);
};

//C
var allSubstrings1 = function(string) {
	"use strict";
	var result = "";
	for(var i = 0; i <= string.length; i++) {
        for(var j = i+1; j <= string.length; j++) {
        	result = result + string.substring(i,j) + ', ' + ' ';
        }
	}
	return result;
};

//D
var allSubstrings2 = function(string) {
	"use strict";
	// make empty array.
	var result = [];
	for(var i = 0; i <= string.length; i++) {
    for(var j = i+1; j <= string.length; j++) {
        // assign variable to b that creates a substring of a string. 
        var b = string.substring(i,j);
        // push substrings to the empty array.
        result.push(b);
        }
	}
	return result;
};

//E
var maxWord = function(string) {
	"use strict"
	// split string into substrings.
	// Turns the variable word into an empty value by assigning it to null.
	var sep = string.split(" "), max = 0, word = null;
	// Loops through string checking each substring and evaluates if substring is longer 
	// than the other.
	for (var i = 0; i < sep.length; ++i) {
		if (max < sep[i].length) {
			max = sep[i].length;
			word = sep[i];
		}
	}
	return word;
};