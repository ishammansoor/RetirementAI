import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      // Here you can add code to upload the file to a server
      console.log('PDF file selected:', file.name);
    } else {
      alert('Please select a valid PDF file.');
    }
  };
  const handleFileUpload = (event) => {
    fetch('https://127.0.0.1:000/upload-form', {
      method: 'POST',
      body: FormData,
    })
      .then(response => response.json)
      .then(data => {
        console.log("Success", data)
      })
      .catch((error) =>{
        console.error('Error: ', error);
      })
  }
  return (
    <div className="App">
      <div className="header">
  <div className="innerHeader">
    <h1 className="fade-in">Welcome to Retirement AI</h1>
    <div className="logoff-container">
      <button
        onClick={() => alert('hello')}
        className="logoff-button"
      >
        Log Off
      </button>
    </div>
  </div>
</div>


      <div className="body">
        <div>
        <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept=".pdf"
          />
          <button
            onClick={handleUploadClick}
        className="upload-button"
        aria-label="Upload PDF"
>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        </button>


          <input
            type="text"
            placeholder="Enter what you want to learn!"
          />

          <button
            onClick={() => handleFileUpload}
            style={{borderBottomRightRadius: 10}}
            className='bg-sky-500 hover:bg-sky-700 text-white'
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
