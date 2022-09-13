/**
 * Returns a promise which resolves after delay.
 */
export function timer(delay: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Timeouts a promise. Rejects when timeout.
 */
export function timeout<T>(timeout: number, task: PromiseLike<T>): Promise<T> {
  return Promise.race([
    task,
    timer(timeout).then(() =>
      Promise.reject(new Error(`timeout ${timeout}ms`))
    ),
  ]);
}
