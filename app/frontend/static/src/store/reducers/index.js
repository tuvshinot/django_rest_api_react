import { combineReducers } from 'redux';
import leads from './leads';
import error from './error';
import utulity from './utulity';

export default combineReducers({
    leads,
    error,
    utulity
});