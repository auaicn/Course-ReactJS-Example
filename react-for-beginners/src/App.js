import { useState, useEffect } from "react";

function App() {
  const [counter, setState] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setState((previousValue) => previousValue + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} type="text" placeholder="Search here" onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
