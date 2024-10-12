import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return storedValue ?? initialState;
  });

  // Everytime the watched array changes, the local storage will immediately sync
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify([value]));
    },
    [value, key]
  );

  return [value, setValue];
}
