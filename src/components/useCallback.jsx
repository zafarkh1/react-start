import React, {useState} from "react";

const Hooks = () => {
	const [number, setNumber] = useState(1)
	const [dark, setDark] = useState(false)

	// const getItems = () => {
	// 	return [number, number+1, number+2]
	// }

	const theme = {
		backgroundColor: dark ? '#333' : '#fff',
		color: dark ? '#fff' : '#333'
	}

	return (
		<>
			<div style={theme}>
				<input type="text" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
				<button onClick={() => setDark(prevDark => !prevDark)}></button>
			</div>
		</>
	)
}

export default Hooks