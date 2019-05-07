import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {
    show : false
};  

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
                return { ...state , show : !state.show}
        default:
            return state;
    }
};