# TypeScript cheatsheet

## Primitive Types

TypeScripts takes from JavaScript: boolean, bigint, null, number, string, symbol, and undefined
Added to TypeScript: any, unknown, never

<br>

# Type Annotations

## Variable Type Annotations

```typescript
const userName: string;
const phoneNum: number;
const bitCoinUser: string = 'satoshi';
```

## Parameter Type Annotations

```typescript
function helloWorld(name: string) {

}
```

## Return Type Annotations

```typescript
function getUser(id: number): string {
  return "Sushi";
}
```

## Object Types

Semicolon or Comma can be used as a separator. Last separator is optional.

```typescript
function printCoord(point: {x: number; y: number}) {

}

function printCoord(point: {x: number, y: number}) {

}
```

### Optional Properties

Use the ? mark after the variable to specify a property as optional.

```typescript
function printName(name: {first: string, last?: string}) {

}
```

## Union Types

Unions as a parameter type.

```typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
```

## Type Aliases

Instead of manually writing your Object Types and Union Types, why not alias them with **Type Aliases**

```typescript
type Point = {
  x: number;
  y: number;
}

function printCoord(point: Point) {

}

type ID = number | string;

function printId(id: ID) {
  console.log("Your ID is: " + id);
}
```

## Interfaces

Use **interface** to describe your objects just like Type Aliases

```typescript
interface User {
  name: string;
  id: number;
}

// VS

type User = {
  name: string;
  id: number;
}
```

Both work the same, but differ if you need to extend them. 
See https://www.typescriptlang.org/docs/handbook/2/everyday-types.html for details.


Moving on, use the new type name in your variable declaration:
```typescript
const userBitCoin: User = {
  name: 'satoshi',
  id: 1,
}
```

## Type Assertions
```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

OR

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

## Literal Type

```typescript
const testing: "test"
```

Literal types are more useful with unions.

In the example below, literal types are used with unions as a **parameter type annotation**

```typescript
function printText(s: string, alignment: "left" | "right" | "center") {

}
```

Below is a **numeric literal type** in a **return type annotation**.

```typescript
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

Below you can do unions of interface with a string literal type.

```typescript
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
```

### Literal Inference

```typescript
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

method is expecting a literal type "GET" not the string "GET".

Fix it with this:

```typescript
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
```

OR this:

```typescript
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```

### Non-null Assertion Operator (Postfix!)

use **!** to check if its not null or undefined 
```typescript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

Its alot shorter than: x && x.toFixed()

## Function Type Expressions

```typescript
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

Use a **type alias** to clean up nested code

```typescript
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

## Rest Parameters

```typescript
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

## Rest Arguments

```typescript
// Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);
```

## Parameter Destructring

```typescript
// Same as prior example
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

## Typescript ES6 Modules

```typescript
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
 
export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}
 
// @filename: app.ts
import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;
```

Notice that imports are from the .js not the .ts files.

You can also use the **import type** syntax to show these are types:

## import type
```typescript
// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;
```

You can also do this inline with an **inline import type**

## inline import type

```typescript
// @filename: app.ts
import { createCatName, type Cat, type Dog } from "./animal.js";
 
export type Animals = Cat | Dog;
```

## 2. Classes

For classes with **public field declaration** (sidenote outside of TypeScript - JavaScript added **public class fields** natively to browsers in 2019-2021. Before these years, you need this supported in your es6 build process.)

For below, variable declarations with types in TypeScript for both the **public class fields** and the arguments in the constructor are as follows:

```typescript
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
```

Use the interface declaration with the class:
```typescript
const user: User = new UserAccount("Murphy", 1);
```

> Notice how the public class fields for **UserAccount** match the interface for **User**.

<br>

# Composing Types - Unions and Generics

## Unions

```typescript
type WindowStates = "open" | "closed" | "minimized";
```

## Generics

```typescript
type StudentNames = Array<string>;
type Students = Array<{ name: string; id: number}>
```
