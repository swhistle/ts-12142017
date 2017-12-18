// interface IAccount {
//     name: string;
//     age: number;
// }

// let account = IAccount;

// let person = {
//     age: 31,
//     name: "Igor",
// };

// let myPerson: typeof person = {
//     age: 31,
//     name: "Igor",
// };

// class Person {
//     public name: string;
//     public age: number;
// }
// let person1 = Person;
// let person2: Person;

// let myName: string;
//let myName: string = "Igor";
//let myName = "Igor";

//myName = 1;

// let num: number;
// num = 100;
// num = 100.3;
// num = 0xf00d;

// isA = null;

// let a: any = 1;
// a = "asdasd";

// let b: void;
// b = undefined;
// function a(): void {

// }

// let account: {
//     age: number,
//     name: string,
// };
// let hashMap: { [key: string]: number | string } = {};
// hashMap.surname = 1;


// let account: {
//     readonly age: number,
//     name: string,
// } = {
//         age: 31,
//         name: "Igor",

//     };
// account.age = 33;
// account.name = "asdasd";

// let arr: ReadonlyArray<number> = [1, 2, 2];
// // let arr1: Array<number>;

// arr.push(3);
// arr[3] = 2;


// let fun: new (p: string, a: string) => string;
// let fun: { new(p: string, a: string): string };

// type g = { x?: g };

// let a: g = {
//     x: {
//         x: {

//         },
//     },
// };

// var g: { x: typeof g };

// type MyCustomType = {
//     age: number,
//     name: string,
// };

// interface IA {
//     name: string;
// }
// class A implements IA {
//     public name: string;
// }

// interface IMover {
//     move(): void;
//     getStatus(): { speed: number };
// }
// interface IShaker {
//     shake(): void;
//     getStatus(): { frequency: number };
// }

// interface IMoverShaker extends IMover, IShaker, MyCustomType {
//     getStatus(): { frequency: number, speed: number };
// }
// let base0: IBase = { id: 1, name: "asda", famale: true };
// interface IBase {
//     id: number;
// }
// let base1: IBase = { id: 1, name: "asda", famale: true };

// interface IBase {
//     name: string;
// }
// let base2: IBase = { id: 1, name: "asda", famale: true };

// interface IBase {
//     famale: boolean;
// }
// let base3: IBase = { id: 1, name: "asda", famale: true };

// interface IHashMap<U> { [key: string]: U; }
// let hashMap1: IHashMap<number> = {
//     age: 1,
//     age1: 1,
//     age2: 1,
//     age3: 1,
// };
// let hashMap2: IHashMap<number | string> = {
//     age: 1,
//     name: "asdasd",
// };
// interface IAction<T> {
//     type: string;
//     payload: T;
// }
// let someAction: IAction<{ name: string }> = {
//     payload: { name: "Igor" },
//     type: "addUser",
// };

// [1, 2, 3, 4].map<string>((val: number) => val.toFixed());

// interface IA<T extends { id: number, name?: string }, U> {
//     someProp: T;
//     id: U;
// }

// let b: IA<{ id: number, female: true }, number>;

// let a: { name: string } & { age: number };
// a = { name: "Igor", age: 32 };
