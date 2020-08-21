// 类型定义文件  React FC
// 类型声明和业务分开
interface User {
    name: string;
    age: number
}

type UserInfoFunc = (user: User) => string;

const getUserInfo3 : UserInfoFunc = (user) => {
    return `name: ${user.name}, age: ${user.age}`
}

