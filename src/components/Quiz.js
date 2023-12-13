import React from "react";
import Questions from "./Questions";

export default function Quiz() {   
    
    /** Next Button event handler */

    function onNext() {
        console.log('On next click')
    }

    /** Previous Button event handler */

    function onPrev() {
        console.log('On previous click')
    }
    
    return (
        <div className="container">
            <h1 className="title text-light">AZ900 training quiz</h1>

            {/* display questions */}

            <Questions></Questions>

            <div className="grid">
                <button className="btn prev" onClick={onPrev}>Previous</button>
                <button className="btn next" onClick={onNext}>Next</button>
                
            </div>

        </div>
    )
}