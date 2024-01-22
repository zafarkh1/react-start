import React, {useState} from 'react'

const Hooks = () => {
	const [count, setcount] = useState(1)

	function decrement() {
		setcount(previousCount => previousCount - 1)
	}

	function increment() {
    setcount((previousCount) => previousCount + 1);
  }
	return (
		<>
			<button onClick={decrement}>-</button>
			<span>{count}</span>
			<button onClick={increment}>+</button>
		</>
	)
}

export default Hooks