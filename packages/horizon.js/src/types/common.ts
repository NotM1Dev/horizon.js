/**
 * Represents a function with a return type and
 * optional typed array of arguments.
 */
export type Func<R, A extends any[] = []> = (...args: A) => R;
