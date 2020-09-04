"use strict";
exports.__esModule = true;
var Stack_1 = require("./lib/Stack");
var ObjStack_1 = require("./lib/ObjStack");
var decimalToBinary = function (decNumber) {
    var stack = new Stack_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var decimalToBinaryObjStack = function (decNumber) {
    var stack = new ObjStack_1["default"]();
    var number = decNumber;
    var rem;
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var tesNumber = 99956565989877878;
console.log("数组栈");
console.time(decimalToBinary(tesNumber));
console.log("数组栈");

console.log("对象栈");
console.time(decimalToBinaryObjStack(tesNumber));
console.log("对象栈");
