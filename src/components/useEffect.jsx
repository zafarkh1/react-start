import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [resourseType, setResourseType] = useState("posts");
  const [items, setItems] = useState([])

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
	}, [resourseType])

  return (
    <>
      <button onClick={() => setResourseType("posts")}>Posts</button>
      <button onClick={() => setResourseType("comments")}>Comments</button>
      <button onClick={() => setResourseType("users")}>Users</button>
      <h1>{resourseType}</h1>
			{
				items.map(item => {
					return <pre>{JSON.stringify(item)}</pre>
				})
			}
    </>
  );
};

export default Hooks;
