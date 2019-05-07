import {GET_LEADS, ADD_LEAD, DELETE_LEAD} from '../actionTypes';
import { getError, loading, showModal } from './index';
import axios from 'axios';


export const getLeads = (leads) => {
  return {
    type: GET_LEADS,
    leads : leads
  };
}

export const fetchLeads = () => dispatch => {
    axios
      .get('http://localhost:8000/api/leads/')
      .then(result => {
        dispatch(getLeads(result.data));
      })
      .catch(err => {
        dispatch(getError(err.response.data));
      });
};

export const addLeadToStore = (lead) => {
  return {
    type: ADD_LEAD,
    lead : lead
  };
}

export const addLead = (lead) => dispatch => {
  axios
    .post('http://localhost:8000/api/leads/', lead)
    .then(result => {
      dispatch(addLeadToStore(result.data));
    })
    .catch(err => {
      dispatch(getError(err.response.data));
    });
};

export const deleteLeadFromStore = (id) => {
  return {
    type: DELETE_LEAD,
    id : id
  };
}

export const deleteLead = (id) => dispatch => {
  axios
    .delete(`http://localhost:8000/api/leads/${id}`)
    .then(result => {
      dispatch(deleteLeadFromStore(id));
    })
    .catch(err => {
      dispatch(getError(err.response.data));
    });
};




