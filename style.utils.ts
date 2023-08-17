export type CreateTransitionPropsType<T> = {
  [K in keyof T as `$${string & K}`]: T[K]
}
