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
    useEffect(() => {
        setQuestion(questions[questionNumber - 1]);
    }, [questions, questionNumber]);

    console.log(question);

    return (
        <div className="trivia">
            <div className="question">
                {question?.question}
            </div>
            <div className="answers">
            {
                question?.answers.map((a) => (
                    <div className="answer"
                        key={a.text}>
                        {a.text}
                    </div>
                ))
            }
            </div>
        </div>
    );
}
