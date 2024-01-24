import React, { useRef } from "react";

const UseRef = () => {
  const title = useRef();
  const date = useRef();
  const location = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title.current.value, location.current.value, date.current.value);
  };

  console.log("rendering...");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Event title:</span>
          <input type="text" ref={title} />
        </label>
        <label>
          <span>Event date:</span>
          <input type="date" ref={date} />
        </label>
        <label>
          <span>Event location:</span>
          <select ref={location}>
            <option value="newYork">New york</option>
            <option value="munich">Munich</option>
            <option value="paris">Paris</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default UseRef;


/*import React, {useState } from "react";

const UseRef = () => {
	const [title, setTitle] = useState()
	const [date, setDate] = useState()
	const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
		console.log(title, date,location);
  };

  console.log("rendering...");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Event title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          <span>Event date:</span>
          <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
        </label>
        <label>
          <span>Event location:</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="newYork">New york</option>
            <option value="munich">Munich</option>
            <option value="paris">Paris</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default UseRef; */