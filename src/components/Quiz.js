import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/** redux store import */
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {

    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    /** Next Button event handler */

    function onNext() {
        console.log('On next click')

        if(trace < queue.length){
            /** Update trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion())
            
            /** insert a new result in the array */
            if(result.length <= trace){
                /** Push answer to result array */
                dispatch(PushAnswer(check))
            }
            setChecked(undefined)
        }

        /** reset the value of the checked variable */

    }

    /** Previous Button event handler */

    function onPrev() {
        console.log('On previous click')
        if(trace > 0){
             /** reduce trace value by one using PrevAction */
            dispatch(MovePrevQuestion())
        }

    }

    function onChecked(check) {
        //console.log(check)
        setChecked(check)
    }

    /** finished exam after last question */
    if(result.length && result.length >= queue.length){
        return <Navigate to={"/result"} replace={"true"}></Navigate>
    }
    
    return (
        <div className="container">
            <h1 className="title text-light">AZ900 training quiz</h1>

            {/* display questions */}

            <Questions onChecked={onChecked} />

            <div className="grid">
                {trace > 0 ? <button className="btn prev" onClick={onPrev}>Previous</button> : <></>}
                <button className="btn next" onClick={onNext}>Next</button>
                
            </div>

        </div>
    )
}