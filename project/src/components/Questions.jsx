import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    console.log(quizState);

    return (
        <div>
            <h1>qqq</h1>
        </div>
    );
}

export default Questions;
