import React, { useState, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={theme}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("Slow function");
  for (let i = 0; i <= 1000000000000000000; i++) return num * 2;
}

export default Memo;
