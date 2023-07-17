import { useState } from "react";

function App() {
  const [input, setInput] = useState("")
  const [displayInput, setDisplayInput] = useState("")

  const handleOnChange = (event) => {
    setInput(event.target.value);
  }

  const onClickButton = () => {
    setDisplayInput(input);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input value={input} onChange={handleOnChange}></input>
      <button onClick={onClickButton}>Enter</button>
      <p>{displayInput}</p>
    </div>
  );
}

export default App;
