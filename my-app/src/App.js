import { useState } from "react";

function App() {
  const [input, setInput] = useState("")
  const [displayInput, setDisplayInput] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  const handleOnChange = (event) => {
    setInput(event.target.value);
  }

  const onClickButton = () => {
    setDisplayInput(input);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input data-testid="checkbox" type="checkbox" onChange={() => setCheckbox(!checkbox)} value={checkbox}/>
      <label>{"This checkbox is now set to " + checkbox}</label>
      <br />
      <input value={input} onChange={handleOnChange}></input>
      <button onClick={onClickButton}>Enter</button>
      <p>{displayInput}</p>
    </div>
  );
}

export default App;
