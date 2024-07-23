import { useState, useContext } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Questions from './components/Questions'
import { QuizContext } from './context/quiz'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>Quiz de Progamação</h1>
     {quizState.gameStage === "Start" && <Welcome/> }
     {quizState.gameStage === "Start" && <Questions/> }

    </div>
  )
}

export default App
