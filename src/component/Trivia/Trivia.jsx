import "./Trivia.css";
import React from 'react';

export default function Trivia() {
  return (
    <div className="trivia">
        <div className="question">
            What's the capital of india?
        </div>
        <div className="answers">
            <div className="answer">
                Delhi
            </div>
            <div className="answer">
                Kolkata
            </div>
            <div className="answer">
                Mumbai
            </div>
            <div className="answer">
                Banglore
            </div>
        </div>
    </div>
  );
}
