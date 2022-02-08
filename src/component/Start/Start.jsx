import { useRef } from "react";
import "./Start.css";
export default function Start({setUserName}) {
    const userNameRef = useRef();
    const handleStartButtonClick = () => {
        userNameRef.current.value && setUserName(userNameRef.current.value);
    }
    return (
      <div className="start">
        <input className="input"
            placeholder="Enter your name"
            ref={userNameRef}
            />
        <button type="button" role="button"
            className="start_btn"
            onClick={handleStartButtonClick}>
            Start
        </button>
      </div>
    );
}
