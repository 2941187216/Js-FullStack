// let obj = {}
// Object.defineProperty(obj, 'a', {
//     value: 1
// })

let obj2 = {
    get a() {
        return 'xxx'
    },
    set a() {

    }
}

// obj2.a = 'XXX'
console.log(obj2.a) 
function log(target, key, descriptor) {
    let originAdd = descriptor.value;
    descriptor.value = function(...args) {
        console.log('start');
        let res = originAdd.apply(this, args);
        return res;
    }

    return descriptor;
}
class Math {
    // 无侵入的
    // add 有参数怎么办 有this怎么办
    constructor() {
        this.c = 10;
    }
    @log
    add(a,b) {
        // 不完美
        // console.log('监听到了')
        const sum = a + b + this.c
        return sum;
    }
}

let m = new Math();
// add 不是原来的add
// add 修饰过后的 add === descript.value
console.log(m.add.toString());
m.add()
// 监听一下add这个方法有没有被调用