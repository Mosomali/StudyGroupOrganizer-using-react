import { useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [key, initialValue]);

  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  return [getValue, setValue];
}
