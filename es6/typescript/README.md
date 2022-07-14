# TypeScript cheatsheet

## Primitive Types

TypeScripts takes from JavaScript: boolean, bigint, null, number, string, symbol, and undefined
Added to TypeScript: any, unknown, never

## Variable Declaration

```
const userName: string;
const phoneNum: number;
const bitCoinUser: string = 'satoshi';
```

# Defining Types - Interface

## 1. Objects

Use **interface** to describe your objects:

```
interface User {
  name: string;
  id: number;
}
```
Use the new type name in your variable declaration:
```
const userBitCoin: User = {
  name: 'satoshi',
  id: 1,
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
