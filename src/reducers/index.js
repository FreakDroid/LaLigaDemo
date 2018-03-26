import { combineReducers } from 'redux';
import TeamReducer from './TeamsReducer';

export default combineReducers({
    teams: TeamReducer
})