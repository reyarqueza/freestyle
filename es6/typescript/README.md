# TypeScript cheatsheet

## Primitive Types

TypeScripts takes from JavaScript: boolean, bigint, null, number, string, symbol, and undefined
Added to TypeScript: any, unknown, never

<br>

# Type Annotations

## Variable Type Annotations

```
const userName: string;
const phoneNum: number;
const bitCoinUser: string = 'satoshi';
```

## Parameter Type Annotations

```
function helloWorld(name: string) {

}
```

## Return Type Annotations

```
function getUser(id: number): string {
  return "Sushi";
}
```

## Object Types

Semicolon or Comma can be used as a separator. Last separator is optional.

```
function printCoord(point: {x: number; y: number}) {

}

function printCoord(point: {x: number, y: number}) {

}
```

### Optional Properties

Use the ? mark after the variable to specify a property as optional.

```
function printName(name: {first: string, last?: string}) {

}
```

## Union Types

Unions as a parameter type.

```
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
```

## Type Aliases

Instead of manually writing your Object Types and Union Types, why not alias them with **Type Aliases**

```
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

```
interface User {
  name: string;
  id: number;
}

VS

type User = {
  name: string;
  id: number;
}
```

Both work the same, but differ if you need to extend them. 
See https://www.typescriptlang.org/docs/handbook/2/everyday-types.html for details.


Moving on, use the new type name in your variable declaration:
```
const userBitCoin: User = {
  name: 'satoshi',
  id: 1,
}
```

## Type Assertions
```
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

OR

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

## Literal Type

```
const testing: "test"
```

Literal types are more useful with unions.

In the example below, literal types are used with unions as a **parameter type annotation**

```
function printText(s: string, alignment: "left" | "right" | "center") {

}
```

Below is a **numeric literal type** in a **return type annotation**.

```
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

Below you can do unions of interface with a string literal type.

```
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

```
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

method is expecting a literal type "GET" not the string "GET".

Fix it with this:

```
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
```

OR this:

```
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```

### Non-null Assertion Operator (Postfix!)

use **!** to check if its not null or undefined 
```
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

Its alot shorter than: x && x.toFixed()

## Function Type Expressions

```
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

Use a **type alias** to clean up nested code

```
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

## 2. Classes

For classes with **public field declaration** (sidenote outside of TypeScript - JavaScript added **public class fields** natively to browsers in 2019-2021. Before these years, you need this supported in your es6 build process.)

For below, variable declarations with types in TypeScript for both the **public class fields** and the arguments in the constructor are as follows:

```
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
```
const user: User = new UserAccount("Murphy", 1);
```

> Notice how the public class fields for **UserAccount** match the interface for **User**.

<br>

# Composing Types - Unions and Generics

## Unions

```
type WindowStates = "open" | "closed" | "minimized";
```

## Generics

```
type StudentNames = Array<string>;
type Students = Array<{ name: string; id: number}>
```
