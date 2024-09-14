import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState()
  const [inputVal, setInputVal] = useState()

  const handleInputChange = (event) => {
    // Update the state with the new value from the input field
    setInputVal(event.target.value);
  };

  const submitButtonClicked = async () => {
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputVal,
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Log the message from the server response
    setText(data.message)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="innerHeader">
          <h1>Hi, Welcome to Retirement AI</h1>

          <button
            onClick={() => alert('hello')}
          >
            log off
          </button>
        </div>
      </div>

      <div className="body">
        <div>
          <button
            onClick={() => alert('upload')}
            style={{borderTopLeftRadius: 10}}
          >
            upload
          </button>

          <input
            type="text"
            placeholder="Enter what you want to learn!"
            value={inputVal}
            onChange={handleInputChange}
          />

          <button
            onClick={() => submitButtonClicked()}
            style={{borderBottomRightRadius: 10}}
          >
            submit
          </button>
        </div>

        <div>
          {text}
        </div>
      </div>
    </div>
  );
}

export default App;
