import React, { useEffect } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";

/** redux store import */
import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {   

    //const trace = useSelector(state => state.questions.trace)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(trace)
    })
    
    /** Next Button event handler */

    function onNext() {
        console.log('On next click')

        if(trace < queue.length){
            /** Update trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion())
        }
    }

    /** Previous Button event handler */

    function onPrev() {
        console.log('On previous click')
        if(trace > 0){
             /** reduce trace value by one using PrevAction */
            dispatch(MovePrevQuestion())
        }

       
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