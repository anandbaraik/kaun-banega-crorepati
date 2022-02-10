import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Trivia from './component/Trivia/Trivia';
import Timer from './component/Timer/Timer';
import Start from './component/Start/Start';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [userName, setUserName] = useState(null);

  const moneyPyramid = useMemo(() => 
    [
      {id:1, amount: "$ 100"},
      {id:2, amount: "$ 200"},
      {id:3, amount: "$ 300"},
      {id:4, amount: "$ 500"},
      {id:5, amount: "$ 1000"},
      {id:6, amount: "$ 2000"},
      {id:7, amount: "$ 4000"},
      {id:8, amount: "$ 8000"},
      {id:9, amount: "$ 16000"},
      {id:10, amount: "$ 32000"},
      {id:11, amount: "$ 64000"},
      {id:12, amount: "$ 125000"},
      {id:13, amount: "$ 250000"},
      {id:14, amount: "$ 500000"},
      {id:15, amount: "$ 1000000"},
    ].reverse()
  , []);
  
  useEffect(() => {
    questionNumber > 1 && setEarned(() => moneyPyramid.find((money) => money.id == questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  
  const questions = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Bold, Italic, Regular are known as",
      answers: [
        {
          text: "Text Effects",
          correct: false,
        },
        {
          text: "Font Effects",
          correct: false,
        },
        {
          text: "Word Art",
          correct: false,
        },
        {
          text: "Font Styles",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Bahubali festival is related to",
      answers: [
        {
          text: "Jainism",
          correct: true,
        },
        {
          text: "Islam",
          correct: false,
        },
        {
          text: "Hinduism",
          correct: false,
        },
        {
          text: "Buddhism",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The Betla National Park is located at?",
      answers: [
        {
          text: "Uttarakhand",
          correct: false,
        },
        {
          text: "Jharkhand",
          correct: true,
        },
        {
          text: "Kerala",
          correct: false,
        },
        {
          text: "Punjab",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "The Yarlung Zangbo river, in India, is known as",
      answers: [
        {
          text: "Ganga",
          correct: false,
        },
        {
          text: "Indus",
          correct: false,
        },
        {
          text: "Brahmaputra",
          correct: true,
        },
        {
          text: "Mahanadi",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which of the following is a peninsular river of India?",
      answers: [
        {
          text: "Gandak",
          correct: false,
        },
        {
          text: "Kosi",
          correct: false,
        },
        {
          text: "Sutlej",
          correct: false,
        },
        {
          text: "Krishna",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Portrait and Landscape are",
      answers: [
        {
          text: "Page notations",
          correct: false,
        },
        {
          text: "Page orientations",
          correct: true,
        },
        {
          text: "Page layout",
          correct: false,
        },
        {
          text: "Page size",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "The Battle of Plassey was fought in",
      answers: [
        {
          text: "1757",
          correct: true,
        },
        {
          text: "1782",
          correct: false,
        },
        {
          text: "1748",
          correct: false,
        },
        {
          text: "1764",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "To which king belongs the Lion capital at Sarnath?",
      answers: [
        {
          text: "Chandragupta",
          correct: false,
        },
        {
          text: "Ashoka",
          correct: true,
        },
        {
          text: "Kanishka",
          correct: false,
        },
        {
          text: "Harsha",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Ctrl, Shift and Alt are called .... keys.",
      answers: [
        {
          text: "Modifier",
          correct: true,
        },
        {
          text: "Function",
          correct: false,
        },
        {
          text: "Alphanumeric",
          correct: false,
        },
        {
          text: "Adjustment",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Where is RAM located?",
      answers: [
        {
          text: "Compiler",
          correct: false,
        },
        {
          text: "External Drive",
          correct: false,
        },
        {
          text: "Expansion Board",
          correct: false,
        },
        {
          text: "Mother Board",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "The language of Lakshadweep, a Union Territory of India, is",
      answers: [
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Malayalam",
          correct: true,
        },
        {
          text: "Telugu",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "A computer cannot `boot` if it does not have the__",
      answers: [
        {
          text: "Compiler",
          correct: false,
        },
        {
          text: "Loader",
          correct: false,
        },
        {
          text: "Operating system",
          correct: true,
        },
        {
          text: "Assembler",
          correct: false,
        },
      ],
    }
  ];

  return (
    <div className="app">
    {userName ? (
      <>
        <div className="main">
          { stop ? <h1 className="trivia-end">{userName}, You Earned {earned}</h1> : (
            <>
              <div className="top">
                <div className="timer">
                  <Timer setStop={setStop} questionNumber={questionNumber}></Timer>
                </div>
              </div>
              <div className="bottom">
                <Trivia
                  questions={questions}
                  setStop={setStop}
                  setQuestionNumber={setQuestionNumber}
                  questionNumber={questionNumber}
                  />
              </div>
            </>
          )}
        </div>
        <div className="pyramid">
          <ul className="moneyList">
          {
            moneyPyramid.map((m) => (
              <li className={questionNumber == m.id ? 'moneyListItem active' : 'moneyListItem'} key={m.amount}>
                <span className="moneyListNumber">
                  {m.id}
                </span>
                <span className="moneyListAmount">
                  {m.amount}
                </span>
              </li>
            ))
          }
          </ul>
        </div>
      </>) : <Start setUserName={setUserName}></Start>
      }
    </div>
  );
}

export default App;
