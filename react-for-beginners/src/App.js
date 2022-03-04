import { useState, useEffect } from "react";

function App() {
  const [counter, setState] = useState(0);
  const onClick = () => setState((prev) => prev + 1);

  console.log("I run all the time");

  useEffect(() => {
    console.log("CALL THE API....");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
