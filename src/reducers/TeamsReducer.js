import {
    GET_TEAMS,
    GET_LEAGUE_TABLE
} from '../actions/types';

const INITIAL_STATE = {
    teams:[],
    positions: []
}

export default (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case GET_TEAMS:
            return {...state, teams: action.payload };
            break;
        case GET_LEAGUE_TABLE:
            return {...state, positions: action.payload};
        default:
            return INITIAL_STATE;
    }
}