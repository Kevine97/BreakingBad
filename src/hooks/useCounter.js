import { useState } from "react";

const useCounter = (initialState = 1) => {
  const [counter, setCounter] = useState(initialState);

  if (counter === 31) {
    setCounter(initialState);
  }


  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    increment,
    decrement,
  };
};

export default useCounter;
