export type PromisesMap<T> = {
  readonly [K in keyof T]: T[K];
};

export type PromisesMapResult<T> = {
  readonly [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K]
};
