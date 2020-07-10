// 默认导出 default export
export default 1;

// 命名导出 named export
export const a = function() {};
const b = 2;
export {
    b
}

// default import
import xx from '.x/js'

// export default {
//     a: 1,
//     b: 2
// }
import { a, b } from '../js'// 不是结构
