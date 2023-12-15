import * as Action from '../redux/result_reducer';

export const PushAnswer = (result) => async(dispatch) => {
    try {
        /** dispatch an action */
        await dispatch(Action.pushResultAction(result));
    } catch (error) {
        console.log(error)
    }   
}