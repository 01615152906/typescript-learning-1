
type User = {
    name : string;
    age: number;

};


interface IUser {
    name: string,
    age: number,

}



type Role = {
    role : "admin" | "user";
};

interface IUserWithRole extends IUser {
    role: "admin" | "uder"
}

type UserWithRole = User & Role;


// const user1: User = {
//     name:"Mr _X",
//     age: 100,
// };
// const user1: UserWithRole = {
//     name:"Mr _X",
//     age: 100,
//     role: "admin",

// };
const user1: IUserWithRole = {
    name:"Mr _X",
    age: 100,
    role: "admin",

};

// const  user2: User = {
//     name: "Mr _Y",
//     age: 102,

// }
const  user2: IUser = {
    name: "Mr _Y",
    age: 102,

}



type IsAdmin = boolean;

const isAdmin: IsAdmin = false;



// function

type Add = (num1: number, num2: number) => number;


interface IAdd {
  (num1: number, num2: number): number;
}


const add : Add = (num1, num2) => num1 + num2

type Friends = string[];

// const freinds: string [] = ["A", "B", "C"];


// const add: IAdd = (num1, num2) => num1 + num2;


interface IFriends {
  [index: number]: string;
}

// const freinds: Friends= ["A", "B", "C"];

const friends: IFriends= ["A", "B", "C"];