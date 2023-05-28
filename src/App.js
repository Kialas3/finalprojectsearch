import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';

import FetchPaperFromGoogleScholar from './FetchPaperFromGoogleScholar';
import ControlPanel from './ControlPanel';

import { Button, Container, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

// 開兩個terminal
// 一個terminal 需要先單獨運行server.js => 先 cd src => 在 node server.js
// 另一個terminal => npm start

const App = () => {
  const [text, setText] = useState("")
  const [keywords, setKeywords] = useState("")

  const [fromYear, setFromYear] = useState("")
  const [searchFromYear, setSearchFromYear] = useState("")

  const [toYear, setToYear] = useState("")
  const [searchToYear, setSearchToYear] = useState("")

  const [numOfResults, setNumOfResults] = useState("")
  const [searchNumOfResults, setSearchNumOfResults] = useState("")

  useEffect(() => {
    const savedText = sessionStorage.getItem('keywords');
    if (savedText) {
      setText(savedText);
      setKeywords(savedText)
    }
  }, []);

  function goHome() {
    setText("")
    setKeywords("")
    setFromYear("")
    setToYear("")
    setNumOfResults("")
    sessionStorage.setItem('keywords', "");
    sessionStorage.setItem('fromYear', "");
    sessionStorage.setItem('toYear', "");
    sessionStorage.setItem('numOfResults', "");
  }

  function inputChange(e) {
    setText(e.target.value)
  }

  function startSearch() {
    if (text !== "") {
      setKeywords(text)
      setSearchFromYear(fromYear)
      setSearchToYear(toYear)
      setSearchNumOfResults(numOfResults)

      sessionStorage.setItem('keywords', text);
      sessionStorage.setItem('fromYear', fromYear);
      sessionStorage.setItem('toYear', toYear);
      sessionStorage.setItem('numOfResults', numOfResults);
    }
  }
  // console.log("keywords = " + keywords)
  // console.log("fromYear = " + fromYear)
  // console.log("toYear = " + toYear)
  // console.log("numOfResults = " + numOfResults)

  return (
    <Container >
      <Grid2 container spacing={3}>
        <Grid2 xs>
          <Button variant='text' onClick={goHome}>Search Page</Button>
        </Grid2>
        <Grid2 xs={6}>
          <TextField
            fullWidth
            id="demo-helper-text-misaligned-no-helper"
            label="You Only Have 100 Searches per month"
            value={text}
            onChange={inputChange}
          />
        </Grid2>
        <Grid2 xs >
          <Button
            variant='contained'
            color='primary'
            onClick={startSearch}>
            Search
          </Button>
        </Grid2>
      </Grid2>
      {!keywords && (
        <div style={{ fontSize: "50px" }} className="center">
          Start Search
        </div>
      )}
      {keywords && (
        <Grid2 container spacing={1} justifyContent="center">
          <Grid2 xs>
            <ControlPanel
              setFromYear={setFromYear}
              setToYear={setToYear}
              setNumOfResults={setNumOfResults}
            />
          </Grid2>
          <Grid2 xs={8}>
            <FetchPaperFromGoogleScholar
              searchKeyword={keywords}
              setSearchFromYear={searchFromYear}
              searchToYear={searchToYear}
              searchNumOfResults={searchNumOfResults}
            />
          </Grid2>
        </Grid2>
      )}
    </Container>
  );
};

export default App;
