// get data based on key from local storage
export const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

// save data to local storage
export const saveDataToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, data);
};

//create debounce function
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

//generate random id using window.crypto.randomUUID()
export const generateRandomId = () => {
  return window.crypto.randomUUID();
};
