import './App.css';
import { useState } from 'react';

function App() {
  const [square1, setSquare1] = useState('')
  const [square2, setSquare2] = useState('')
  const [square3, setSquare3] = useState('')
  const [isClick, setClicked] = useState('')
  const [guess, setGuess] = useState('')

  const color1 = Math.floor(Math.random() * 16777215).toString(16);
  const setColor1 = "#" + color1

  const color2 = Math.floor(Math.random() * 16777215).toString(16);
  const setColor2 = "#" + color2
  
  const color3 = Math.floor(Math.random() * 16777215).toString(16);
  const setColor3 = "#" + color3

  function ChooseSquare(square1, square2, square3) {
    const arr = [square1, square2, square3]
    const randSquare = arr[Math.floor(Math.random() * arr.length)]
    setGuess(randSquare)
  }

  function GetRandomColors(square1, square2, square3) {
    square1 = setColor1
    setSquare1(square1)
    square2 = setColor2
    setSquare2(square2)
    square3 = setColor3
    setSquare3(square3)
    ChooseSquare(square1, square2, square3)
    setClicked(false)
  }

  if (square1 === '') {
    GetRandomColors(square1, square2, square3)
    setSquare1(setColor1)
    setSquare2(setColor2)
    setSquare3(setColor3)
  }

  return (
    <div className="App">
      <div className='squares'>
        <div style={{ backgroundColor: square1 }} className='square 1' onClick={() => setClicked(square1)}/>
        <div style={{ backgroundColor: square2 }} className='square 2' onClick={() => setClicked(square2)}/>
        <div style={{ backgroundColor: square3 }} className='square 3' onClick={() => setClicked(square3)}/>
      </div>
      <div className='message'>
        <p>Click the swatch that matches: {guess}</p>
        <div>
          <h3>{isClick === guess ? "Yes, that's correct!" : isClick === false ? '' : "Sorry, that's incorrect."}</h3>
        </div>
        <button onClick={() => GetRandomColors(square1, square2, square3)}>Play Again</button>
    </div>
    </div>
  );
}

export default App;
