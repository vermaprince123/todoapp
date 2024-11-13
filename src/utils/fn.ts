/**
 * Retrieves the data stored in local storage for the provided key.
 *
 * @param {string} key - The key to retrieve the data for.
 * @returns {any} The data stored under the key, or null if no data was found.
 */
export const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * Saves the provided data to the local storage using the provided key.
 *
 * @param {string} key - The key to store the data under.
 * @param {any} data - The data to store.
 */
export const saveDataToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, data);
};

/**
 * Creates a debounced function that delays the invocation of the provided
 * function until after the specified delay in milliseconds has passed since
 * the last time the debounced function was invoked.
 *
 * @template T - The type of the function to debounce.
 * @param {T} func - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {(...args: Parameters<T>) => void} A new debounced function.
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

/**
 * Generates a random unique identifier using the Web Crypto API.
 *
 * @returns {string} A random UUID string.
 */
export const generateRandomId = () => {
  return window.crypto.randomUUID();
};
