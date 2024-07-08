import React, { useState } from 'react'
import styled from 'styled-components';
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';
// import image from "../public/Images"


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}

    </>
  )
}

export default App
