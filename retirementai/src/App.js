import { useState, useRef } from 'react';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Markdown from 'react-markdown'

function App() {

  const [text, setText] = useState()
  const [inputVal, setInputVal] = useState()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  var html = null;

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      console.log('PDF file selected:', file.name);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const submitButtonClicked = async () => {
    const response = await fetch('http://localhost:3000/', {
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

    const data = await response.json();
    setText(data.message)
  }

  return (
    <div className="App">
      <div className="header">
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <div className='texts'>Hi! Welcome to AI Retirement (AIRE)</div>
          </div>
      </div>

      <div className="body">
          
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf"
          />

          <input
            type="text"
            placeholder="Enter what you want to learn!"
            value={inputVal}
            onChange={handleInputChange}
            style={{borderRadius: 10}}
          />

          <button
            onClick={() => {
              submitButtonClicked();
              handleOpen();
            }}
            style={{borderBottomRightRadius: 10}}
          >
            SUBMIT
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Here is your plan
              </Typography>
              <div>
                <Markdown>{text}</Markdown>
              </div>
            </Box>
          </Modal>
        </div>

        
      </div>
    </div>
  );
}

export default App;
