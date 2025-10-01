# Promise S.O.S

[![npm package](https://img.shields.io/npm/v/promise-sos/latest.svg)](https://www.npmjs.com/package/promise-sos)
[![npm downloads](https://img.shields.io/npm/dm/promise-sos.svg)](https://www.npmjs.com/package/promise-sos)
[![Types: TypeScript](https://img.shields.io/npm/types/promise-sos.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A lightweight, fully typed library providing utilities for working with JavaScript promises.

---

## ✨ Features

- 📦 **Tiny** and dependency-free
- 🔒 **Type-safe** – written in TypeScript
- ⚡ Works with **ESM** and **CommonJS**
- 🛠 Provides helpers for combining and managing promises

---

## 📥 Installation

```sh
npm install promise-sos
# or
yarn add promise-sos
```

---

## 🚀 Usage

### `promiseAllObject`

A helper function that extends `Promise.all` by allowing you to pass an **object of promises** (instead of an array).
It returns a promise that resolves to an object with the same keys, but with the promises replaced by their resolved values.

#### ✅ Example with mixed values
```ts
import { promiseAllObject } from 'promise-sos';

const promisesObject = {
  promiseA: Promise.resolve('resolved promiseA'),
  promiseB: Promise.resolve('resolved promiseB'),
  someValue: 1234,
  flag: true
};

const result = await promiseAllObject(promisesObject);

console.log(result);
// {
//   promiseA: 'resolved promiseA',
//   promiseB: 'resolved promiseB',
//   someValue: 1234,
//   flag: true
// }
```

#### ❌ Example with rejection
```ts
import { promiseAllObject } from 'promise-sos';

const promisesObject = {
  promiseA: Promise.reject(new Error('rejected promiseA')),
  promiseB: Promise.resolve('resolved promiseB')
};

try {
  const result = await promiseAllObject(promisesObject);
} catch (error) {
  console.error(error);
  // Error: rejected promiseA
}
```

---

## 📘 API

### `promiseAllObject<T>(promisesMap: T): Promise<PromisesMapResult<T>>`

- **`promisesMap`**: An object whose values may be promises or regular values.
- **Returns**: A promise resolving to an object with the same keys, with all promises unwrapped.
- **Throws**:
  - `TypeError` if input is not a non-empty plain object.
  - Any error from a rejected promise.

---

## 📝 License

MIT © [Inaki Arroyo](http://inakiarroyo.com)
