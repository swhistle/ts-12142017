// function getAverage(a: number, b:number, c:number): string {
//   let total = a + b + c;
//   let average = total / 3;
//   return `The average is ${average}`;
// }
//
// getAverage(1,2,3);

// function getAverage(a: number, b: number, c?: number): string {
//   let total = a + b;
//   let count = 2;
//   if (typeof c !== 'undefined') {
//     total += c;
//     count++;
//   }
//   let average = total / count;
//   return `The average is ${average}`;
// }
//
// getAverage(1,2);
// getAverage(1,2);

// function getAverage(...num: number[]): string {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < num.length; i++) {
//     total += num[i];
//     count++;
//   }
//   let average = total / count;
//   return `The average is ${average}`;
// }
//
// getAverage(1, 2);
// getAverage(1, 2, 2, 4, 5, 2, 35, 25, 35);
// type sn = string | number;
//
// function isString(param: sn): param is string {
//   return typeof param === 'string';
// }
//
// function getAverage(a: number, b: number, c: number): string;
// function getAverage(a: string, b: string): number;
// function getAverage(a: sn, b: sn, c: sn = 0): sn {
//   let total: number = 0;
//   if (isString(a)) {
//     // я здесь строка
//     total += parseInt(a, 10);
//   } else {
//     total += 0;
//   }
//
//   total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10)
// }
// interface IPoint {
//   sum(): number;
// }
//
// interface ICoord {
//   x: number;
//   y: number;
// }
//
// class Point {
//
//   public constructor(
//     private readonly _x: number, private  _y: number,
//   ) {
//     this._x += 4;
//   }
//
//   public sum(): number {
//     this._x += 2;
//     this._y += 2;
//     return this._x + this._y;
//   }
// }
//
// let point: Point = new Point(1, 2);
//
// point.sum();

// class Singleton {
//
//   private static _instance: Singleton;
//   private count: number = 0;
//
//   private constructor() {}
//
//   public static getInstance(): Singleton {
//     if (!Singleton._instance) {
//       Singleton._instance = new Singleton();
//     }
//     return Singleton._instance;
//   }
//
//   public add(): void {
//     this.count++;
//   }
//
//   public getCount(): number {
//     return this.count;
//   }
// }
//
// let ins1: Singleton = Singleton.getInstance();
// let ins2: Singleton = Singleton.getInstance();
// ins1.add();
// ins1.add();
// ins1.add();
// ins2.add();
// ins2.add();
// ins2.add();
// console.log(ins1.getCount());
// console.log(ins2.getCount());

// class A {
//   public x: number = 1;
//   protected y: number = 1;
//   private z: number = 1;
//
//   public constructor() {
//   }
// }
//
// let a: A = new A();
//
// class B extends A {
//   public constructor() {
//     super();
//     this.y
//   }
// }

// abstract class A {
//   public value(): number {
//     return 2;
//   }
//
//   public abstract getValue(): number;
// }
//
// class B extends A {
//   public getValue(): number {
//     return this.value() * 2;
//   }
// }
// class C extends A {
//   public getValue(): number {
//     return this.value() * 22;
//   }
// }