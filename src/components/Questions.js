import React, { useState } from "react";

export default function Questions() {

    const [checked, setChecked] = useState(undefined)


    function onSelect(){
        console.log('radio button change')
    }

  return (
    <div className="questions">
        <h2 className="text-light">1. What is one benefit of using Azure Functions?</h2>

        <ul>
            <li>
                <input type="radio" name="options" id="q1-option" value={checked} onChange={onSelect()}/>
                <label className="text-primary" htmlFor="q1-option">A. Azure Functions can be written in a variety of programming languages</label>
                <div className="check"></div>
            </li>
        </ul>
    </div>
  );
}