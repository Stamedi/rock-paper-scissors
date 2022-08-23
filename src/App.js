import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import logo from './img/logo2.png';

function App() {
  const [currentMove, setCurrentMove] = useState(null)
  const [result, setResult] = useState('none')
  const [loss, setLoss] = useState(0);
  const [win, setWin] = useState(0);
  const [finalRes, setFinalRes] = useState(false)

  const moves = [
    { num: 1, name: "ROCK" },
    { num: 2, name: "PAPER" },
    { num: 3, name: "SCISSORS" }]

  let randomNumGen = Math.floor((Math.random() * 3) + 1)

  useEffect(() => {
    if (currentMove === 1) {
      if (currentMove === randomNumGen) {
        setResult("DRAW")
        setCurrentMove(null)
      } else if (randomNumGen === 2) {
        setResult("ROUND LOST")
        setCurrentMove(null)
        setLoss(loss + 1)
      } else if (randomNumGen === 3) {
        setResult("ROUND WON")
        setCurrentMove(null)
        setWin(win + 1)
      }
    } else if (currentMove === 2) {
      if (currentMove === randomNumGen) {
        setResult("DRAW")
        setCurrentMove(null)
      } else if (randomNumGen === 3) {
        setResult("ROUND LOST")
        setCurrentMove(null)
        setLoss(loss + 1)
      } else if (randomNumGen === 1) {
        setResult("ROUND WON")
        setCurrentMove(null)
        setWin(win + 1)
      }
    } else if (currentMove === 3) {
      if (currentMove === randomNumGen) {
        setResult("DRAW")
        setCurrentMove(null)
      } else if (randomNumGen === 1) {
        setResult("ROUND LOST")
        setCurrentMove(null)
        setLoss(loss + 1)
      } else if (randomNumGen === 2) {
        setResult("ROUND WON")
        setCurrentMove(null)
        setWin(win + 1)
      }
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentMove])

  useEffect(() => {
    if (win === 3 || loss === 3) {
      setFinalRes(true)
    }

  }, [win, loss])

  const resetGame = () => {
    setFinalRes(false)
    setResult('none')
    setLoss(0)
    setWin(0)
  }


if (!finalRes) {
  return (
    <div className="container">
      <img src={logo} alt="" className="logo" />
      <div className="vs-container">
        <h1 className="you">YOU</h1>
        <h1 className="ai">AI</h1>
      </div>
      <h1 className="round-container"><span className="you">{win}</span> VS <span className="ai">{loss}</span></h1>
        <h3 className={result === 'none' ? 'res-none' : 'result'}>{result}</h3>
      <div className="choise-container">
        {moves.map((move) =>
          <button key={move.num}
          onClick={() => setCurrentMove(move.num) }>
          {move.name}</button>
        )}
      </div>
    </div>
  );
} else  {
  return (
    <div className="container-2">
      {win === 3 ? <h1 className="you">YOU WON</h1> : <h1 className="ai">YOU LOST</h1>}
      <button onClick={() => resetGame()}>RESTART</button>
    </div>
  )
}
  
}

export default App;
