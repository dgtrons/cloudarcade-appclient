import { useState, useEffect } from 'react';   
import { useDispatch } from 'react-redux';
import data from '../database/data';

/** redux actions */
import * as Actions from '../redux/question_reducer';

/** fecth question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError : null });

    /** fetch data from api */
    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading : true }));

        /** asyn function fetch backend data */
        (async () => {
            try {
                let question = data;

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading : false }));
                    setGetData(prev => ({ ...prev, apiData : question }));

                    /** dispatch an action */
                    dispatch(Actions.startExamAction(question));
                } else {
                    throw new Error('No question available');
                    setGetData(prev => ({ ...prev, isLoading : false }));
                    setGetData(prev => ({ ...prev, serverError : 'No data found' }));
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading : false }));
                setGetData(prev => ({ ...prev, serverError : error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}