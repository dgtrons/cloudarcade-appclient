import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

/** Custom Hook */
import { useFetchQuestion } from "../hooks/FetchQuestion";

export default function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}, setGetData] = useFetchQuestion()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])

    useEffect(() => {
        //console.log(questions)
    })

    function onSelect(i){
        console.log(i)
        onChecked(i)
    }

    if(isLoading) return <h3 className="text-light">Loading...</h3>
    if(serverError) return <h3 className="text-light">{serverError || "Unknown server error"}</h3>

  return (
    <div className="questions">
        <h2 className="text-light">{questions?.question}</h2>

        <ul key={questions?.id}>
            {
                questions?.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio" 
                            name="options" 
                            id={`q${i}-option`} 
                            value={false} 
                            onChange={() => onSelect(i)}
                        />
                        <label htmlFor={`q${i}-option`}>{q}</label>
                        <div className="check"></div>
                    </li>
                
                ))
            }
        </ul>
    </div>
  );
}