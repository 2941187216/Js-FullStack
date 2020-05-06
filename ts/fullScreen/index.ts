// TS: 内置  +  外部类型
// boolean number string
// 数组: 每一项类型都是一样的   元组
let list = [1,2,3,4]
let list1: number[] = [1,3]
// 元组
let list2: [string, number] = ['1', 2]
// 枚举
enum Color {Red = 0, Green = 1,Blue = 2}
let color: Color = Color.Green;
let colorName = Color[0];// 'Red'
// any
let a: any;  // 不清楚类型  用户输入
// void  空
// function test (a): void {}
// null undefined
let b: null = null;
let c: undefined = undefined;
// never
function test ():never {
    while(true){

    }
    //return 1;
}
    

// object

// 自定义一个类型
// 联合类型
type RFSmethods = 'requestFullscreen' | 'webkitRequestFullScreen' 
| 'mozRequestFullScreen' | 'msRequestFullscreen'

interface Element {
    requestFullscreen(): any,
    webkitRequestFullScreen() :any,
    mozRequestFullScreen():any,
    msRequestFullscreen():any
}
let RFS_METHOD: RFSmethods 
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
} else if ('webkitRequestFullScreen' in document.body ) {
    RFS_METHOD = 'webkitRequestFullScreen';
} else if ('mozRequestFullScreen' in document.body ) {
    RFS_METHOD = 'mozRequestFullScreen';
} else if ('msRequestFullscreen' in document.body ) {
    RFS_METHOD = 'msRequestFullscreen';
} 
function beFull (el: Element) {
    // 检查兼容性
    // 4 个中的一个
    el[RFS_METHOD]();
}

// ts 结合 原生 HTML dom
// ts 结合 Node
// ts 结合 react
// dom 节点
// 节点类型 没有内置  lib
const box = document.querySelector('.box')
const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', function() {
        //box.requestFullscreen();
        // 是不是 ELement 的实例
        // Element 是内置的一个类
        // html 标签 是 Element 实例
        // box: element | null
        if (box instanceof Element) {
            beFull(box);
        }
    })
}



        
        


    
