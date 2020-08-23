const numberArr : number[]= [1, 2, 3]

const stringArr : string[] = ['1', '2', '3']

const undefinedArr : undefined[] = [undefined, undefined]

const arr : (number | string)[] = [1, 'string', 2];

const xiaoJieJie : {name:string, age: number}[] = [
    { name : '刘', age : 18 },
    { name : '谢', age : 28 }
]

type Lady = { name : string, age : number};
const xiaoJieJies : Lady[] = [
    { name : '刘', age : 18 },
    { name : '谢', age : 28 }
]

class Madam {
    name: string;
    age: number
}
const xiaoJieJies1 : Madam[] = [
    { name : '刘', age : 18 },
    { name : '谢', age : 28 }
]



