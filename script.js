console.log("I am Java Script!");
let name = "Muhammad Avesh Tanwar";
const age = 19;
var city = "Mumbai, Maharashtra - 400102";
console.log(name);
console.log(age);
console.log(city);

let isTrue = true;
let valNull = null;
let notDefined;
console.log(typeof isTrue);
console.log(typeof valNull);
console.log(typeof notDefined);

let objStdDtls = { stdName: "Avesh", stdAge: 19 };
let arrColors = ["Red", "Blue", "Green"];
let funcGreet = function (funcValue) {
  return (funcValue = "a Function");
};

for (let i = 0; i < 3; i++) {
  console.log(
    "I am an Array of type " +
    typeof arrColors[i] +
    " with value : " +
    arrColors[i],
  );
}

console.log(
  "I am an Object of type " +
  typeof objStdDtls.stdName +
  " with value : " +
  objStdDtls.stdName,
);
console.log(
  "I am an Object of type " +
  typeof objStdDtls.stdAge +
  " with value : " +
  objStdDtls.stdAge,
);

let valueOfFunc = funcGreet();
console.log(
  "I am a Function of type " +
  typeof valueOfFunc +
  " with value : " +
  valueOfFunc,
);
console.log(typeof function () { });

let $name = "Muhammad Avesh Tanwar";
console.log($name);

console.log("1. Arithematic Operators: ");
let sum = 5 + 2;
let diff = 5 - 2;
let prod = 5 * 2;
let div = 10 / 2;
let mod = 5 % 2;
let exp = 2 ** 3;
let x = 5;
let y = 5;
// let inc = x++;
// let dec = x--;
console.log("Addition: " + sum);
console.log("Subtraction: " + diff);
console.log("Multiplication: " + prod);
console.log("Division: " + div);
console.log("Modulus: " + mod);
console.log("Exponentation: " + exp);
console.log("Increment: " + ++x);
console.log("Decrement: " + --y);

let terAge = 64;
let terResult = terAge >= 18 ? "You are Adult." : "You are Minor";
console.log(terResult);

let person = {
  name: "Muhammad Avesh Tanwar.",
  age: 19,
  isEmployed: true,
};
person.name = "Avesh"; // Modified this property of the Object
let key = person.isEmployed;
console.log(person.name);
console.log(person["age"]);
console.log(key);
person.Role = "Self";
person.srNo = 1;
console.log(person.Role);
console.log(person.srNo);
