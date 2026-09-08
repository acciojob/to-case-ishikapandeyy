function toCase(text) {
  // write your code here
	if (text.length === 0) {
  return "-";
} 
	
	let t=text.toLowerCase();
	let T=text.toUpperCase();
	return t+"-"+T
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
