import {GET_ERROR} from '../actionTypes';

const DEFAULT_STATE = {
    error : null
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case GET_ERROR:
        return { error : action.error };
      default:
        return state;
    }
};