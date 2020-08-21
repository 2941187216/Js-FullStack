
// 面向接口编程是一切高级编程范式的开始 
// interface Java 
interface User {
    name: string;
    age: number
}

const getUserInfo2 = (user: User) : string => {
    return `name: ${user.name}, age: ${user.age}`
}