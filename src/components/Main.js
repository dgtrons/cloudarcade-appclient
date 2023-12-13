import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

export default function Main() {

  const inputRef = useRef(null)

  return (
    <div className="container">
      <h1 className="title text-light">AZ900 training quiz</h1>

      <ol>
        <li>Answer the following mutiple-choice questions</li>
        <li>You will receive a score report at the end</li>
      </ol>

      <form id="form">
        <input ref={inputRef} className="userid" type="text" placeholder="Username" />
      </form>

      <div className="start">
        <Link to={'quiz'} className="btn">Start Quiz</Link>
      </div>
    </div>
  )
}   