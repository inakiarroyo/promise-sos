# Promise S.O.S

[![npm package](https://img.shields.io/npm/v/promise-sos/latest.svg)](https://www.npmjs.com/package/promise-sos)
[![npm downloads](https://img.shields.io/npm/dm/promise-sos.svg)](https://www.npmjs.com/package/promise-sos)
[![CircleCI](https://img.shields.io/circleci/project/github/iarroyo5/promise-sos/master.svg)](https://circleci.com/gh/iarroyo5/promise-sos)
[![Coverage Status](https://img.shields.io/codecov/c/github/iarroyo5/promise-sos/master.svg)](https://codecov.io/gh/iarroyo5/promise-sos/branch/master)
[![DevDependencies](https://img.shields.io/david/dev/iarroyo5/promise-sos.svg)](https://david-dm.org/iarroyo5/promise-sos?type=dev)
[![Dependencies](https://img.shields.io/david/iarroyo5/promise-sos.svg)](https://david-dm.org/iarroyo5/promise-sos)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2fad4dc0c7584ec0bf64a1db58ced5f7)](https://www.codacy.com/app/iarroyo/promise-sos?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=iarroyo5/promise-sos&amp;utm_campaign=Badge_Grade)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/2502/badge)](https://bestpractices.coreinfrastructure.org/projects/2502)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Types: TypeScript](https://img.shields.io/npm/types/typescript.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

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
