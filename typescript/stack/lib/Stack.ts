// 数据结构由什么组成？
// ADT 数据和操作数据的方法
// 栈 FILO  队列 FIFO

// 元数据 items: any[]
// 方法：constructor this.items = []
        // push 
        // pop
        // peek
        // size
        // 是否为空 isEmpty
        // 清空 clear
        // toString 输出


export default class MyStack {
    private items: any[];
    constructor() {
        this.items = [];
    }
    push(item: any) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length = 0
    }
    clear() {
        return this.items = []
    }
    size() : number {
        return this.items.length
    }
    toString() {
        return this.items.toString()
    }
}
