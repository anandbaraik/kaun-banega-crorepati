import React from 'react'
import "./Finish.css";

const Finish = ({userName, earned, setStop}) => {
  return (
    <div className="trivia-end">
        <h1>{userName}, You Earned {earned}</h1>
    </div>
  )
}

export default Finish