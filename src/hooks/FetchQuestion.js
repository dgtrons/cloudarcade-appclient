import { useState, useEffect } from 'react';   
import { useDispatch } from 'react-redux';
import data, { answers } from '../database/data';

/** redux actions */
import * as Actions from '../redux/question_reducer';

/** fecth question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError : null });

    /** fetch data from api */
    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading : true }));

        /** async function fetch backend data */
        (async () => {
            try {
                let question = data;

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading : false }));
                    setGetData(prev => ({ ...prev, apiData : { question, answers } }));

                    /** dispatch an action */
                    dispatch(Actions.startExamAction({question, answers}));
                } else {
                    throw new Error('No question available');
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading : false }));
                setGetData(prev => ({ ...prev, serverError : error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

/** move next action dispatch function */
export const MoveNextQuestion = () => async (dispatch) => { 
    try {
        /** dispatch an action */
        dispatch(Actions.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}

/** move prev action dispatch function */
export const MovePrevQuestion = () => async (dispatch) => { 
    try {
        /** dispatch an action */
        dispatch(Actions.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}