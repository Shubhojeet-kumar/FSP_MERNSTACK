str="Programming";
console.log("slice-->",str.slice(2,6));
console.log("slice-->",str.slice(-3,-1));
console.log("slice-->",str.slice(-1,-3));   //no output

console.log("substring-->",str.substring(2,6));
console.log("substring-->",str.substring(-3,-1));       //does not allow negative index

console.log("substr-->",str.substr(1,3));

nstr="    JAvascript   "
console.log("LOWERCASE-->",nstr.toLowerCase());
console.log("UPPERCASE-->",nstr.toUpperCase());
console.log("TRIMMED-->",nstr.trim(),"end");
console.log("START TRIMMED-->",nstr.trimStart(),"end");
console.log("END TRIMMED-->",nstr.trimEnd(),"end");

console.log("i at->",str.indexOf('i'));
console.log("m at->",str.indexOf('m'));
console.log("if not present->",str.indexOf('t'));