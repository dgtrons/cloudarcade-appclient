import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import questionsReducer from './reducers/questionsReducer';
import { resultReducer } from './result_reducer';

const rootReducer = combineReducers({
    questions : questionsReducer,
    result : resultReducer
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });