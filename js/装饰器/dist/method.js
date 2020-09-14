var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// let obj = {}
// Object.defineProperty(obj, 'a', {
//     value: 1
// })
function log(target, key, descriptor) {
  let originAdd = descriptor.value;

  descriptor.value = function (...args) {
    console.log('start');
    let res = originAdd.apply(this, args);
    return res;
  };

  return descriptor;
}

let Math = (_class = class Math {
  // 无侵入的
  // add 有参数怎么办 有this怎么办
  constructor() {
    this.c = 10;
  }

  add(a, b) {
    // 不完美
    // console.log('监听到了')
    const sum = a + b + this.c;
    return sum;
  }

}, (_applyDecoratedDescriptor(_class.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);
let m = new Math(); // add 不是原来的add
// add 修饰过后的 add === descript.value

console.log(m.add.toString());
m.add(); // 监听一下add这个方法有没有被调用