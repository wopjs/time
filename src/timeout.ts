import { abortable } from "@wopjs/disposable";

/**
 * Returns a promise which resolves after delay.
 */
export const timer = (delay: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, delay));

/**
 * Similar to `setTimeout`. Returns a function to clear the timeout.
 */
export const timeout = (handler: () => void, timeout: number): (() => void) => {
  // eslint-disable-next-line prefer-const
  let ticket: ReturnType<typeof setTimeout> | undefined;

  const disposer = abortable(() => clearTimeout(ticket));

  ticket = setTimeout(() => {
    disposer();
    handler();
  }, timeout);

  return disposer;
};
