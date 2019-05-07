import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {
    leads : [],
};  

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case actionTypes.GET_LEADS:
        return {
            ...state,
            leads : action.leads
        };
        case actionTypes.ADD_LEAD:
            return { ...state ,leads : [...state.leads, action.lead] }
        case actionTypes.DELETE_LEAD:
            return { ...state , leads : state.leads.filter(lead => lead.id !== action.id) }
      default:
        return state;
    }
};