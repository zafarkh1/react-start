import React, { useState, useMemo } from "react";

const Hook = () => {
  const [state, setState] = useState(0);
  const [price, setPrice] = useState(5);
  const [count, setCount] = useState(10);

  function hardCalc(price, count) {
    console.log(`HardCalcualtion`);
    return price * count;
  }

	const hardResult = useMemo(()=> hardCalc(price, count), [price, count])

  return (
    <>
      <p>State: {state}</p>
      <p>Price: {price}</p>
      <p>Count: {count}</p>
      <p>Result: {hardResult}</p>
      <button onClick={() => setState(state + 1)}>updateState</button>
      <button onClick={() => setPrice(price + 1)}>updatePrice</button>
      <button onClick={() => setCount(count + 1)}>updateCount</button>
    </>
  );
};

export default Hook;