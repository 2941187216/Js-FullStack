var _class;

// 装饰这个class的时候 能够拿到 这个class
// 装饰类里面的属性
// 装饰类里面的方法
function observer(target) {
  target.displayName = 'XXX';
  return target;
}

let Com = observer(_class = class Com {
  render() {
    return '123';
  }

}) || _class;

console.log(Com.displayName);