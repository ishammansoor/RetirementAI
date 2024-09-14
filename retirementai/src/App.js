import './App.css';

function App() {
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
          />

          <button
            onClick={() => alert('submit')}
            style={{borderBottomRightRadius: 10}}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
