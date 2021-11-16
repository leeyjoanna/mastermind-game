import React, { useEffect, useState } from 'react'
import Header from './components/Header.js'
import Main from './components/Main.js'
import './App.css';
import randService from './services/randnumber.js'

function App() {
  const [ compNum, setCompNum ] = useState([])


  useEffect(() => {
    randService
      .getRand(4)
      .then(res => setCompNum(res.split("\n", 4)))
      .catch(e => console.log(e))
  },[])

  const handleReset = () => {
    window.location.reload();
    return false;
  }
  return (
    <div id="App">
      <Header/>
      <Main compNum={compNum}/>
      {/* computer: {compNum} */}
      <button id="reset-button" onClick={handleReset}>Reset game</button>
    </div>
  );
}

export default App;
