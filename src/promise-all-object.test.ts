import { promiseAllObject } from './promise-all-object';

describe('validate input throws', () => {
  it('should throw if the input is an empty object', async () => {
    await expect(promiseAllObject({})).rejects.toThrowError('The input argument must be of type Object and not empty');
  });

  it('should throw if the input is non object type', async () => {
    await expect(promiseAllObject(true)).rejects.toThrowError('The input argument must be of type Object and not empty');
    await expect(promiseAllObject(false)).rejects.toThrowError('The input argument must be of type Object and not empty');
    await expect(promiseAllObject(1)).rejects.toThrowError('The input argument must be of type Object and not empty');
    await expect(promiseAllObject('invalid')).rejects.toThrowError('The input argument must be of type Object and not empty');
  });
});

describe('validate resolved promise', () => {
  it('should resolve if there are non promise values as values', async () => {
    const result = await promiseAllObject({
      1: 'resolved',
      '1234-5678': 1234,
      test: true,
      nullValue: null,
      objectValue: {
        keyA: 'a'
      }
    });

    expect(result).toEqual({
      1: 'resolved',
      '1234-5678': 1234,
      test: true,
      nullValue: null,
      objectValue: {
        keyA: 'a'
      }
    });
  });

  it('should resolve if all values are resolve promises', async () => {
    const result = await promiseAllObject({
      promiseA: Promise.resolve('resolved promiseA'),
      promiseB: Promise.resolve('resolved promiseB'),
      promiseC: Promise.resolve('resolved promiseC'),
      promiseD: Promise.resolve('resolved promiseD')
    });

    expect(result).toEqual({
      promiseA: 'resolved promiseA',
      promiseB: 'resolved promiseB',
      promiseC: 'resolved promiseC',
      promiseD: 'resolved promiseD'
    });
  });

  it('should resolve if the values are a mix of promises and non promises', async () => {
    const result = await promiseAllObject({
      promiseA: Promise.resolve('resolved promiseA'),
      promiseB: Promise.resolve('resolved promiseB'),
      1: 'resolved',
      '1234-5678': 1234
    });

    expect(result).toEqual({
      promiseA: 'resolved promiseA',
      promiseB: 'resolved promiseB',
      1: 'resolved',
      '1234-5678': 1234
    });
  });
});

describe('validate rejected promise', () => {
  it('should reject if any of the promise rejects', async () => {
    await expect(
      promiseAllObject({
        promiseA: Promise.resolve('resolved promiseA'),
        promiseB: Promise.resolve('resolved promiseB'),
        promiseC: Promise.reject(new Error('reject promiseC')),
        promiseD: Promise.resolve('resolved promiseD')
      })
    ).rejects.toThrowError();
  });

  it('should reject if any of the promise rejects with mix values types', async () => {
    await expect(
      promiseAllObject({
        promiseA: Promise.resolve('resolved promiseA'),
        1: Promise.reject(new Error('reject promise with number as key'))
      })
    ).rejects.toThrowError();
  });

  it('should reject if all the promise rejects', async () => {
    await expect(
      promiseAllObject({
        promiseA: Promise.reject(new Error('resolved promiseA')),
        promiseB: Promise.reject(new Error('resolved promiseB')),
        promiseC: Promise.reject(new Error('reject promiseC')),
        promiseD: Promise.reject(new Error('resolved promiseD'))
      })
    ).rejects.toThrowError();
  });
});
