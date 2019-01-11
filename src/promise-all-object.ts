export type PromisesMap<T> = {
  readonly [K in keyof T]: T[K];
};

export type PromisesMapResult<T> = {
  readonly [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K]
};

/**
 * A helper function that extends the native Promose.all accepting an object of promises as parameter.
 * @param {PromisesMap<T>} promisesMap object of promises for each property
 * @returns {Promise<PromisesMapResult<T>>} a promise that resolves to an object with the same properties and the resolved values of the promises for each one
 * @throws TypeError if the input is not defined or is not an object
 * @throws Error if any of the promises is rejected
 * @template T represent the input object
 */
export const promiseAllObject = async <T>(promisesMap: PromisesMap<T>): Promise<PromisesMapResult<T>> => {
  if (
    !promisesMap
    || typeof promisesMap !== 'object'
    || Object.keys(promisesMap).length === 0 && promisesMap.constructor === Object
  ) {
    throw new TypeError('The input argument must be of type Object and not empty');
  }

  const keys = Object.keys(promisesMap);
  const promises = keys.map((key) => (promisesMap as any)[key]);

  try {
    const resolvedPromises = await Promise.all(promises);

    return resolvedPromises.reduce((resolved, value, index) => {
      resolved[keys[index]] = value;
      return resolved;
    }, {});

  } catch (error) {
    throw error;
  }
};
