# Promise SOS

[![Build Status](https://travis-ci.com/iarroyo5/promise-sos.svg?branch=master)](https://travis-ci.com/iarroyo5/promise-sos) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A library that provides utilities for working with promises.

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
