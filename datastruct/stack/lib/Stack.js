"use strict";
// 数据结构由什么组成？
// ADT 数据和操作数据的方法
// 栈 FILO  队列 FIFO
exports.__esModule = true;
// 元数据 items: any[]
// 方法：constructor this.items = []
// push 
// pop
// peek
// size
// 是否为空 isEmpty
// 清空 clear
// toString 输出
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.items = [];
    }
    MyStack.prototype.push = function (item) {
        this.items.push(item);
    };
    MyStack.prototype.pop = function () {
        return this.items.pop();
    };
    MyStack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    MyStack.prototype.isEmpty = function () {
        return this.items.length = 0;
    };
    MyStack.prototype.clear = function () {
        return this.items = [];
    };
    MyStack.prototype.size = function () {
        return this.items.length;
    };
    MyStack.prototype.toString = function () {
        return this.items.toString();
    };
    return MyStack;
}());
exports["default"] = MyStack;
