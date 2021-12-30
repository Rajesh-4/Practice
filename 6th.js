// String method

let x="RAJESH kumar sahu";
let y= x.charAt(5);// return charecter at 5 position;
console.log(y)

 y= x.charCodeAt(5);// retuen unicode of the 5th position letter
console.log(y);

console.log(String.fromCharCode(y))// return value of 72(which is a unicode number) in letter
y=x.indexOf("H")// return the position of H in number 
console.log(y)

y=x.lastIndexOf("sahu")
console.log(y)