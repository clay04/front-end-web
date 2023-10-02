// Declare variables
var val1 = 3;
var val2 = 8;
var myName = "Clay Aiken Mangeber Jr";

// Document object
document.getElementById("my-btn").addEventListener("click",
function() {
    myFunction(myName, val1, val2);
});

// Your Function, hy rememeber your function
function myFunction(name, a, b) {
        var value = a * b;
        var join = name +": "+ value;
    document.getElementById("value-demo").innerHTML = join;
}