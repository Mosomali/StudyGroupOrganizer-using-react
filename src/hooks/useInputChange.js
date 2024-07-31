import { useState, useCallback } from 'react';

export function useInputChange(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handleChange];
}
