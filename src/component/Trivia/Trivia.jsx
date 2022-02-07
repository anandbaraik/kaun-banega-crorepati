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

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    const handleClickHandler = (ans) => {
        setSelectedAnswer(ans);
        setClassName("answer active");
        delay(3000, () => {
            setClassName(ans.correct ? 'answer correct' : 'answer wrong');
        });

        delay(6000, () => {
            if(ans.correct){
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            } else {
                setStop(true);
            }
        });
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
