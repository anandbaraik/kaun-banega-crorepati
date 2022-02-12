import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Finish.css";
import ReactCanvasConfetti from "react-canvas-confetti";

const Finish = ({stop, userName, earned, setStop}) => {

  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  const [letsPlayAgain, setLetsPlayAgain] = useState(false);
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };

  function getAnimationSettings(originXA, originXB) {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2
      }
    };
  }

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
      setTimeout(() => {
        clearInterval(intervalId);
        setIntervalId(null);
        setLetsPlayAgain(true);
      }, 8000);
    }
  }, [intervalId, nextTickAnimation]);

  useEffect(() => {
    if(stop) {
      startAnimation();
    }
  }, [stop]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const playAgain = () => {
    setStop(!stop);
    setLetsPlayAgain(false);
  }

  return (
    <>
      <div className="trivia-end">
        <h1>{userName}, You Earned {earned}</h1>
        { letsPlayAgain &&
          <button type="button" role="button"
              className="play_again"
              onClick={playAgain}>
              Play again
          </button>
        }
      </div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  )
}

export default Finish