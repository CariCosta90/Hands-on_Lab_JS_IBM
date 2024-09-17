// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    let testLet = "test let"
    const testConst = "test const"
    var testVar = "test var"

    console.log(testLet + "before inside let")
    console.log(testConst + "before inside const")
    console.log(testVar + "before inside var")
    
    testLet = "change let inside"
    testConst = "change const inside"
    testVar = "change var inside"

    console.log(testLet + "after inside let")
    console.log(testConst + "after inside const")
    console.log(testVar + "after inside var")
    
}
    testLet = "change let outside"
    testConst = "change const outside"
    testVar = "change var outside"

    console.log(testLet + "after outside let")
    console.log(testConst + "after outside const")
    console.log(testVar + "after outside var")
    
