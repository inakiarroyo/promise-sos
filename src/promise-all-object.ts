export type PromisesMap<T> = {
  readonly [K in keyof T]: T[K];
};

export type PromisesMapResult<T> = {
  readonly [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K];
};

/**
 * Extends `Promise.all` to accept an object of promises as input.
 *
 * @template T - The shape of the input object.
 * @param promisesMap - An object whose values may be promises.
 * @returns A promise that resolves to an object with the same keys,
 *          where all promise values are replaced by their resolved values.
 *          The `readonly` property modifiers of the input are preserved.
 * @throws {TypeError} If the input is not a non-empty plain object.
 */
export const promiseAllObject = async <T extends Record<string, unknown>>(
  promisesMap: PromisesMap<T>
): Promise<PromisesMapResult<T>> => {
  if (
    !promisesMap ||
    typeof promisesMap !== 'object' ||
    promisesMap.constructor !== Object ||
    Object.keys(promisesMap).length === 0
  ) {
    throw new TypeError(
      'Input must be a non-empty plain object with promises as values.'
    );
  }

  const entries = Object.entries(promisesMap);

  const resolvedValues = await Promise.all(entries.map(([, value]) => value));

  return entries.reduce((acc, [key], index) => {
    (acc as Record<string, unknown>)[key] = resolvedValues[index];
    return acc;
  }, {} as PromisesMapResult<T>);
};
