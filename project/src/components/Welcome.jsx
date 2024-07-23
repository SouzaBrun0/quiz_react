import { useContext} from 'react'
import React from 'react'
import Quiz from "../img/quiz.svg"
import './Welcome.css'
import { QuizContext } from '../context/quiz'

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState)
    
  return (
    <div className="welcome">
        <h2>Seja Bem vindo</h2>
        <p>Clique no botao abaixo para começar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome;