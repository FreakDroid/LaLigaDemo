import {
    GET_TEAMS
} from '../actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case GET_TEAMS:
            return action.payload;
            break;
    
        default:
            return INITIAL_STATE;
    }
}