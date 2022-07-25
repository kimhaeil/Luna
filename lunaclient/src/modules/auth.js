import { createAction, handleActions } from "redux-actions";

const SAMPLE_ACTION = 'auth/SAMPLE_ACTIONS';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const auth = handleActions({
   [SAMPLE_ACTION]: (state, actions) => state, 
}, initialState,
);
export default auth;