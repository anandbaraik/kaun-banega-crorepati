import "./Trivia.css";
import React, { useEffect, useState } from 'react';

export default function Trivia({
        questions,
        setStop,
        setQuestionNumber,
        questionNumber
    }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    useEffect(() => {
        setQuestion(questions[questionNumber - 1]);
    }, [questions, questionNumber]);

    const handleClickHandler = (ans) => {
        setSelectedAnswer(ans);
        setClassName("answer active");
        setTimeout(() => {
            setClassName(ans.correct ? 'answer correct' : 'answer wrong');
        }, 3000);
    }

    return (
        <div className="trivia">
            <div className="question">
                {question?.question}
            </div>
            <div className="answers">
            {
                question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : 'answer'}
                        key={a.text}
                        onClick={() => handleClickHandler(a)}
                        >
                        {a.text}
                    </div>
                ))
            }
            </div>
        </div>
    );
}
