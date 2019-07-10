import React, { memo, useState } from "react";
import "./App.css";

const Add = memo(props => {
  const result = props.number * 2;
  console.log('component rendered')
  return <div>Component - {result}</div>;
});

function App() {
  const [value, setValue] = useState(0);
  console.log('outter component rendered');
  return (
    <div className="App">
      <Add number={2} />
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
}

export default App;
