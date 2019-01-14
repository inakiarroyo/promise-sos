# Promise S.O.S

[![Build Status](https://travis-ci.com/iarroyo5/promise-sos.svg?branch=master)](https://travis-ci.com/iarroyo5/promise-sos)
[![Coverage Status](https://coveralls.io/repos/github/iarroyo5/promise-sos/badge.svg?branch=master)](https://coveralls.io/github/iarroyo5/promise-sos?branch=master)

[![npm version](https://badge.fury.io/js/promise-sos.svg)](https://badge.fury.io/js/promise-sos)
![![Types: TypeScript]](https://img.shields.io/npm/types/typescript.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
<!-- [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) -->
<!-- [![Downloads](https://img.shields.io/npm/dm/promise-sos.svg)](https://www.npmjs.com/package/promise-sos) -->

A typed library that provides utilities for working with promises.

## Installation

```sh
npm i promise-sos
```

## Usage

- `promiseAllObject`

  Helper function which receives an object with a promise in each property and returns a promise that resolves to an object with the same properties and the resolved values of the promises.

  ```js
  import { promiseAllObject } from 'promise-sos';

  const promisesObject = {
    promiseA: Promise.resolve('resolved promiseA'),
    promiseB: Promise.resolve('resolved promiseB'),
    1: 'resolved',
    '1234-5678': 1234
  };

  const result = await promiseAllObject(promisesObject);

  console.log(result);

  // {
  //   'promiseA': 'resolved promiseA',
  //   'promiseB': 'resolved promiseB',
  //   1: 'resolved',
  //   '1234-5678': 1234
  // }
  ```

  ```js
  import { promiseAllObject } from 'promise-sos';

  const promisesObject = {
    promiseA: Promise.reject(new Error('rejected promiseA')),
    promiseB: Promise.resolve('resolved promiseB')
  };

  try {
    const result = await promiseAllObject(promisesObject);
  } catch (error) {
    console.log(error);
  }
  ```

## License

MIT
