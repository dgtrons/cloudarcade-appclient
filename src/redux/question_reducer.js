import {createSlice } from '@reduxjs/toolkit';

/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue : [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state, action) => {
           return {
               ...state,
               queue : action.payload
           }
        },
        moveNextAction : (state, action) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state, action) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : (state, action) => {
            return {
                queue : [],
                answers : [],
                trace : 0
            }
        }
    },
    
});

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;

export default questionReducer.reducer;