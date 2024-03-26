function firstNonRepeatedChar(str) {
 // Write your code here
	if (str.length==1) {
		return str;
	}
	for (let i = 0; i < str.length; i++) {
		let s1=str.charAt(i);
		let s2=str.charAt(i+1);
		
		let repeat=1;
		if (s1==s2) {
			repeat++;
			i++;
		}
		if (repeat==1 && str.charAt(str.length-1)!=str.charAt(str.length-2)) {
			return s1;
		}
	}
	return "null"; 
}

// console.log(firstNonRepeatedChar("aabbcdd"))

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
