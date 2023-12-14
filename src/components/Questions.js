import React, { useEffect, useState } from "react";
import data from "../database/data";

/** Custom Hook */
import { useFetchQuestion } from "../hooks/FetchQuestion";

export default function Questions() {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}, setGetData] = useFetchQuestion()
    const question = data[0]

    useEffect(() => {
        console.log(apiData)
    })


    function onSelect(){
        //console.log('radio button change')
    }

  return (
    <div className="questions">
        <h2 className="text-light">{question.question}</h2>

        <ul key={question.id}>
            {
                question.options.map((q, i) => (
                    <li key={i}>
                        <input 
                            type="radio" 
                            name="options" 
                            id={`q${i}-option`} 
                            value={false} 
                            onChange={onSelect()}
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