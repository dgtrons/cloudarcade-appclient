import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";


export default function Result() {

  function onRestart(){
    console.log('restart')
  }

  return (
    <div className="container">
      <h1 className="text-light">Result</h1> 
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Diego</span>
        </div>
        <div className="flex">
          <span>Correctly answered questions</span>
          <span className="bold">3</span>
        </div>
        <div className="flex">
          <span>Wrongly answered questions</span>
          <span className="bold">2</span>
          </div>
      </div>

      <div className="start">
        <Link className="btn" to={'/'}>Restart</Link>
      </div>

      <div className="container">
        
        <ResultTable></ResultTable>
      </div>
    </div>
  )
}