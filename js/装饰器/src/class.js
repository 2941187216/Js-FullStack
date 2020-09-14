// 装饰这个class的时候 能够拿到 这个class
// 装饰类里面的属性
// 装饰类里面的方法
function observer(target) {
    target.displayName = 'XXX';
    return target;
}

@observer 
class Com {
    render() {
        return '123'
    }
}

console.log(Com.displayName)