/**
 * Similar to `setInterval`. Returns a function to clear the interval.
 */
export const interval = (
  handler: () => void,
  timeout: number
): (() => void) => {
  const ticket = setInterval(() => handler, timeout);
  return () => clearInterval(ticket);
};
