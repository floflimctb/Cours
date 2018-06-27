var a = 2; //a2
a = a - 1; //a1
a++; //a2
var b = 8; //b8
b += 2; //b10
var c = a + b * b; // c = 2 + 10 * 10 = 102 
var d = a * b + b; // d = 2 * 10 + 10 = 30
var e = a * (b + b); // e = 2 * (10 + 10) = 40
var f = a * b / a; // f = 2 * 10 / 2 = 10
var g = b / a * a; // g = 10 / 2 * 2 = 10
// a2 b10 c102 d30 e40 f10 g10
console.log("a=" + a + "\nb=" + b + "\nc=" + c + "\nd=" + d + "\ne=" + e + "\nf=" + f + "\ng=" + g);