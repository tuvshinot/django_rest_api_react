import { GET_ERROR } from '../actionTypes';

export const getError = (error) => {
    return {
        type : GET_ERROR,
        error
    }
}